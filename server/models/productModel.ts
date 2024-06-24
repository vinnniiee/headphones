import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Review
interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
  user: mongoose.Types.ObjectId;
}

// Schema for Review
const reviewSchema: Schema<IReview> = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

// Interface for Product
interface IProduct extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  reviews: IReview[];
}

// Schema for Product
const ProductSchema: Schema<IProduct> = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, default: 0.0 },
    countInStock: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0.0 },
    numReviews: { type: Number, required: true, default: 0 },
    reviews: { type: [reviewSchema], default: [] },
  },
  {
    timestamps: true,
  }
);

// Create models
const Review: Model<IReview> = mongoose.model<IReview>('Review', reviewSchema);
const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);

export { Review, IProduct, IReview };

export default Product;