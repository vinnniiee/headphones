import { Router } from "express";
import {
  createProduct,
  createProductReview,
  deleteProduct,
  getFeaturedProducts,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController";
import { requireAdminAccess, requireAuth } from "../middlewares/authMiddleware";
import { vaidateObjectId } from "../middlewares/validateObjectId";

const router = Router();

router
  .route("/")
  .get(getProducts)
  .post(requireAuth, requireAdminAccess, createProduct);
router.route("/:id").get(getProductById);
router
  .route("/:id/reviews")
  .post(requireAuth, vaidateObjectId, createProductReview);
router.get("/featured/top", getFeaturedProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(requireAuth, requireAdminAccess, updateProduct)
  .delete(requireAuth, requireAdminAccess, deleteProduct);
export { router as productRoutes };
