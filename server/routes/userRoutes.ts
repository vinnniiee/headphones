import { Router } from "express";
import {
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController";
import { requireAdminAccess, requireAuth } from "../middlewares/authMiddleware";

const router = Router();

router
  .route("/profile")
  .get(requireAuth, getUserProfile)
  .put(requireAuth, updateUserProfile);

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/register",registerUser);
router
  .route("/:id")
  .get(requireAuth, requireAdminAccess, getUserById)
  .delete(requireAuth,requireAdminAccess, deleteUser)
  .put(requireAuth, requireAdminAccess, updateUser);

  router
  .route("/")
  .get(requireAuth, requireAdminAccess, getUsers)
  


export { router as userRoutes };
