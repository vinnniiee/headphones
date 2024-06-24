import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';
import { requireAuth, requireAdminAccess } from '../middlewares/authMiddleware';

router.route('/').post(requireAuth, addOrderItems).get(requireAuth, requireAdminAccess, getOrders);
router.route('/my').get(requireAuth, getMyOrders);
router.route('/:id').get(requireAuth, getOrderById);
router.route('/:id/pay').put(requireAuth, updateOrderToPaid);
router.route('/:id/deliver').put(requireAuth, requireAdminAccess, updateOrderToDelivered);

export  {router as orderRoutes};
