import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dataString = localStorage.getItem("userInfo");
const jsonData = JSON.parse(dataString);

const { data } = jsonData || '';

export const withdrawApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mohdelivery.up.railway.app/api/withdrawals",
    headers: {
      Authorization: `Bearer ${data?.accessToken}`,
    },
  }),
  reducerPath: "withdrawApi",
  tagTypes: ["Withdraw"],

  endpoints: (build) => ({
    getWithdrawals: build.query({
      query: () => "/",
      providesTags: ["Withdraw"],
    }),
    getWithdrawal: build.query({
      query: (id) => `/${id}`,
      providesTags: ["Withdraw"],
    }),

    withdrawalComplete: build.mutation({
      query: (id) => ({
        url: `/${id}/completed`,
        method: "PUT",
        credentials: "include",
      }),
      providesTags: ["Withdraw"],
      invalidatesTags: ["Withdraw"],
    }),
  }),
});
console.log(document.cookie);
export const {
  useGetWithdrawalsQuery,
  useGetWithdrawalQuery,
  useWithdrawalCompleteMutation,
} = withdrawApi;
