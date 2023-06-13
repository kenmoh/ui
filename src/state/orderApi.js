import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://mohdelivery.up.railway.app/api/orders" }),
  reducerPath: "orderApi",
  tagTypes: ["Order"],

  endpoints: (build) => ({
    getOrders: build.query({ query: () => "/", providesTags: ["Order"] }),
    getOrder: build.query({
      query: (id) => `/${id}`,
      providesTags: ["Order"],
      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery } = orderApi;
