import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import { formatApiError } from "../utils/helpers";
import { logout } from "./authSlice";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const baseQueryWithErrorHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (formatApiError(result.error) === "Not authorized.") {
      api.dispatch(logout());
    }
  }
  return result;
};

export default baseQueryWithErrorHandling;

export const apiSlice = createApi({
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
