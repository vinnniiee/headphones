import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

export interface ICartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  itemsPrice: number;
  shippingAddress: {
    address: string | null;
    city: string | null;
    postalCode: string | null;
    country: string | null;
  };
  paymentMethod: string | null;
  totalPrice: number;
  taxPrice: number;
  shippingPrice: number;
}

const defaultState: CartState = {
  items: [],
  itemsPrice: 0,
  totalQuantity: 0,
  shippingAddress: {
    address: null,
    city: null,
    postalCode: null,
    country: null,
  },
  paymentMethod: null,
  totalPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
};
const cartFromLocalStorage = localStorage.getItem("cart");
console.log(cartFromLocalStorage);
const initialState: CartState = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : defaultState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const cartItem: ICartItem = action.payload;
      const existingIndex = state.items.findIndex(
        (it) => it._id === cartItem._id
      );
      if (existingIndex !== -1) {
        const existingItem = state.items[existingIndex];

        state.itemsPrice = parseFloat(
          (
            state.itemsPrice -
            (existingItem.price * existingItem.quantity -
              cartItem.price * cartItem.quantity)
          ).toFixed(2)
        );

        state.totalQuantity -= existingItem.quantity - cartItem.quantity;

        if (cartItem.quantity === 0) {
          state.items = state.items.filter((it) => it._id !== cartItem._id);
        } else {
          state.items[existingIndex] = cartItem;
        }
      } else {
        state.items.push(cartItem);
        state.itemsPrice = parseFloat(
          (state.itemsPrice + cartItem.price * cartItem.quantity).toFixed(2)
        );
        state.totalQuantity += cartItem.quantity;
      }
      state.taxPrice = parseFloat((state.itemsPrice * 0.18).toFixed(2));
      state.shippingPrice = parseFloat(
        (state.itemsPrice >= 800 ? 0 : 200).toFixed(2)
      );
      state.totalPrice =
        state.taxPrice + state.shippingPrice + state.itemsPrice;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },

    clearCartItems: (state) => {
      const newState = {
        ...defaultState,
        totalQuantity: 0,
        shippingAddress: state.shippingAddress,
        paymentMethod: state.paymentMethod,
      };
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
  },
});

export const {
  updateCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
