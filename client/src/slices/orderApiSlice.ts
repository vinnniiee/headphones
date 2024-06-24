import { ORDER_URL, PAYPAL_URL } from "../constants";
import { Order } from "../types/order";
import { PayPalOrderDetails } from "../types/paypal";
import { apiSlice } from "./apiSlice";
import { CartState } from "./cartSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => ({
        url: `${ORDER_URL}/my`,
      }),
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response as Order[];
      },
    }),
    createOrder: builder.mutation<Order, CartState>({
      query: (cartState: CartState) => ({
        url: ORDER_URL,
        method: "POST",
        body: cartState,
      }),
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response as Order;
      },
    }),
    getOrderById: builder.query<Order, string>({
      query: (orderId: string) => ({
        url: `${ORDER_URL}/${orderId}`,
      }),
      keepUnusedDataFor: 5,
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response as Order;
      },
    }),
    payOrder: builder.mutation<
      Order,
      { orderId: string; details: PayPalOrderDetails }
    >({
      query: ({ orderId, details }) => ({
        url: `${ORDER_URL}/${orderId}/pay`,
        method: "PUT",
        body: details,
      }),
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response as Order;
      },
    }),
    getPaypalClientId: builder.query<{ clientId: string }, void>({
      query: (arg: void) => ({
        url: `${PAYPAL_URL}`,
      }),
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response;
      },
    }),
    getAllOrders: builder.query<Order[], void>({
      query: () => ({
        url: ORDER_URL,
      }),
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response;
      },
    }),
    deliverOrder:builder.mutation<Order,string>({
      query:(orderId)=>({
        url:ORDER_URL+"/"+orderId+"/deliver",
        method:'PUT'
      }),
      transformResponse: (response: any) => {
        if (response.error) {
          throw new Error(response.error);
        }
        return response;
      },
    })
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetAllOrdersQuery,
  useDeliverOrderMutation
} = orderApiSlice;

export default orderApiSlice.reducer;
