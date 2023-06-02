import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  reducerPath: "authApi",
  tagTypes: ["Auth"],

  endpoints: (build) => ({
    addUser: build.mutation({
      query: (data) => ({
        url: "/users/staff-user",
        method: "POST",
        body: data,
      }),
      providesTags: ["Auth"],
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "/admin",
        method: "POST",
        body: data,
        credentials: "include",
      }),

      providesTags: ["Auth"],
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation } = authApi;
