import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/orders" }),
  reducerPath: "orderApi",
  tagTypes: ["Order"],

  endpoints: (build) => ({
    getOrders: build.query({ query: () => "/", providesTags: ["Order"] }),
    getOrder: build.query({
      query: (id) => `/${id}`,
      providesTags: ["Order"],
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery } = orderApi;
