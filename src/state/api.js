import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Order", "Wallet", "Withdraw"],

  endpoints: (build) => ({
    // User Query
    getUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    getUsers: build.query({ query: () => "/users", providesTags: ["User"] }),
    addUser: build.mutation({
      query: (user) => ({ url: "/users", method: "POST", body: user }),
      providesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: user,
      }),
      providesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: id,
      }),
      providesTags: ["User"],
    }),
    // Order Query
    getOrders: build.query({ query: () => "/orders", providesTags: ["Order"] }),
    getOrder: build.query({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    // Wallet Query
    getWallets: build.query({
      query: () => "/wallets",
      providesTags: ["Wallet"],
    }),
    // Withdrawal Query
    getWithdraw: build.query({
      query: () => "/withdrawals",
      providesTags: ["Withdraw"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useGetOrdersQuery,
  useGetOrderQuery,
  useGetWalletsQuery,
  useGetWithdrawQuery,
  useAddUserMutation,
} = api;
