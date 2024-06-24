import { PRODUCT_URL, UPLOAD_IMAGE_URL } from "../constants";
import { Product, Review } from "../types/product";
import { apiSlice } from "./apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      { products: Product[]; pages: number; page: number },
      { keyword: string; pageNumber: string }
    >({
      query: ({ keyword, pageNumber }) => ({
        url: PRODUCT_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 10,
      providesTags: [{ type: "Product", id: "LIST" }],
    }),
    getProductById: builder.query<Product, string | undefined>({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
      }),
      providesTags: (result, error, id) => [{ type: "Product", id }],
      keepUnusedDataFor: 1000,
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId) => ({
        url: `${PRODUCT_URL}/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" },
      ],
    }),
    createProduct: builder.mutation<Product, void>({
      query: () => ({
        url: `${PRODUCT_URL}`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation<
      Product,
      { id: string; changes: Partial<Product> }
    >({
      query: ({ id, changes }) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "PUT",
        body: changes,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id },
        { type: "Product", id: "LIST" },
      ],
    }),
    uploadProductImage: builder.mutation<
      { message: string; imagePath: string },
      { formData: FormData; productId: string }
    >({
      query: ({ formData, productId }) => ({
        url: UPLOAD_IMAGE_URL + "/" + productId,
        body: formData,
        method: "POST",
      }),
    }),
    createReview: builder.mutation<
      Review,
      { productId: string; rating: number; comment: string }
    >({
      query: (data) => ({
        url: PRODUCT_URL + "/" + data.productId + "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { productId }) => [
        { type: "Product", id: productId },
      ],
    }),
    getFeaturedProducts: builder.query<Product[], void>({
      query: () => `${PRODUCT_URL}/featured/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useCreateReviewMutation,
  useGetFeaturedProductsQuery,
} = productSlice;
