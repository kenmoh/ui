import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://mohdelivery.up.railway.app/api" }),
  reducerPath: "orderApi",
  tagTypes: ["Order"],

  endpoints: (build) => ({
    getOrders: build.query({ query: () => "/orders", providesTags: ["Order"] }),
    getOrder: build.query({
      query: (id) => `/orders/${id}`,
      providesTags: ["Order"],
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery } = orderApi;
