import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constants";
import { User } from "../types/user";

interface LoginData {
  email: string;
  password: string;
}
interface RegisterData extends LoginData {
  name: string;
}

const userApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: LoginData) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (arg: void) => ({ url: `${USER_URL}/logout` }),
    }),
    register: builder.mutation({
      query: (data: RegisterData) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    profile: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: USER_URL,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    getUserById: builder.query<User, string>({
      query: (userId) => ({
        url: USER_URL + "/" + userId,
      }),
      providesTags: (result, error, id) => [{ type: "User", id }],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation<User, string>({
      query: (userId) => ({
        url: USER_URL + "/" + userId,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<
      User,
      { userId: string; name?: string; email?: string; isAdmin?: Boolean }
    >({
      query: (newData) => ({
        url: USER_URL + "/" + newData.userId,
        method: "PUT",
        body: newData,
      }),
      invalidatesTags: (result, err, data) => [
        { type: "User", id: data.userId },
        'User'
      ],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} = userApiSLice;
