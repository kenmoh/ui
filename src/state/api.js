import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "hhttps://mohdelivery.up.railway.app/api" }),
  reducerPath: "api",
  tagTypes: ["Order", "Wallet", "Withdraw"],

  endpoints: (build) => ({
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

export const { useGetWalletsQuery, useGetWithdrawQuery } = api;
