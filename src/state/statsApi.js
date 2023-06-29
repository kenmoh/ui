import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const statsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mohdelivery.up.railway.app/api",
  }),
  reducerPath: "statsApi",
  tagTypes: ["Stat"],

  endpoints: (build) => ({
    getStats: build.query({ query: () => "/stats", providesTags: ["Stat"] }),
    getOrdersPerDay: build.query({
      query: () => "/orders/orders-per-day",
      providesTags: ["Stat"],
    }),
    getOrdersPerMonth: build.query({
      query: () => "/orders/orders-per-month",
      providesTags: ["Stat"],
    }),
    getOrdersPerYear: build.query({
      query: () => "/orders/orders-per-year",
      providesTags: ["Stat"],
    }),
  }),
});

export const {
  useGetStatsQuery,
  useGetOrdersPerDayQuery,
  useGetOrdersPerMonthQuery,
  useGetOrdersPerYearQuery,
} = statsApi;
