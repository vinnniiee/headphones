import { NextFunction, Request, Response } from "express";
import Product, { IReview, Review } from "../models/productModel";
import asyncHandler from "../middlewares/asyncHandler";
import { deleteImageFromS3, getSignedImageUrl } from "../aws-config";
import { Types } from "mongoose";

const getProducts = async (req: Request, res: Response) => {
  let pageSize;
  if (process.env.NODE_ENV === "production") {
    pageSize = parseFloat(process.env.PAGINATION_LIMIT!);
  } else {
    pageSize = 4;
  }

  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const count = await Product.countDocuments({ ...keyword });

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  for (const p of products) {
    p.image = await getSignedImageUrl(p.image);
  }

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("No product found.");
    }
    const signedImageUrl = await getSignedImageUrl(product.image);
    product.image = signedImageUrl;
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user?._id,
    image: "2024-06-22T07:54:39.688Z.sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    // product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await deleteImageFromS3(product.image);
    await Product.deleteOne({ _id: product._id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user?._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const { name, _id } = req.user!;

    if (!name || !_id) {
      res.status(400);
      throw new Error("Current User is invalid.");
    }
    const review: Partial<IReview> = {
      name,
      rating: Number(rating),
      comment,
      user: new Types.ObjectId(_id.toString()),
    };

    const newReview = new Review(review);
    product.reviews.push(newReview);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  for (const p of products) {
    p.image = await getSignedImageUrl(p.image);
  }
  res.json(products);
});

export {
  deleteProduct,
  updateProduct,
  getProductById,
  getProducts,
  createProduct,
  createProductReview,
  getFeaturedProducts,
};
