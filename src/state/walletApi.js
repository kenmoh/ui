import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const walletApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://mohdelivery.up.railway.app/api/wallets" }),
  reducerPath: "walletApi",
  tagTypes: ["Wallet"],

  endpoints: (build) => ({
    getWallets: build.query({
      query: () => "/",
      providesTags: ["Wallet"],
    }),
    getWallet: build.query({
      query: (id) => `/${id}`,
      providesTags: ["Wallet"],
    }),
  }),
});

export const { useGetWalletsQuery, useGetWalletQuery } = walletApi;
