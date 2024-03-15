// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/home" }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => {
        return {
          url: `/get`,
          method: "GET",
        };
      },
    }),
    postAllUserData: builder.mutation({
      query: (name) => {
        return {
          url: `/post`,
          method: "POST",
          body: name,
        };
      },
    }),
    updateUserData: builder.mutation({
      query: (prop) => {
        return {
          url: `/put/${prop}`,
          method: "PATCH",
          body: prop,
        };
      },
    }),
    deleteAllUserData: builder.mutation({
      query: (prop) => {
        return {
          url: `/delete/${prop}`,
          method: "DELETE",
          body: prop,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useDeleteAllUserDataMutation,
  useGetUserDataQuery,
  usePostAllUserDataMutation,
  useUpdateUserDataMutation,
} = userApi;
