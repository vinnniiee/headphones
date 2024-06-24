import { Product } from "./product";

// Interface for Order Item
export interface OrderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: Product;
}

// Interface for Order
export interface Order {
  _id: string;
  user: { _id: string; name: string; email: string };
  orderItems: OrderItem[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  paymentResult?: {
    id?: string;
    status?: string;
    update_time?: string;
    email_address?: string;
  };
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: Date;
  createdAt?: Date;
  isDelivered: boolean;
  deliveredAt?: Date;
}
