import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const dataString = localStorage.getItem("userInfo");
// const data = JSON.parse(dataString);



// const {
//   data: { accessToken },
// } = data ;
const dataString = localStorage.getItem("userInfo");
const jsonData = JSON.parse(dataString);

const { data } = jsonData || '';

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mohdelivery.up.railway.app/api/users",
    headers: {
      Authorization: `Bearer ${data?.accessToken}`,
    },
  }),

  reducerPath: "api",
  tagTypes: ["User"],

  endpoints: (build) => ({
    getUsers: build.query({ query: () => "/", providesTags: ["User"], invalidatesTags: ["User"],}),
    getUser: build.query({
      query: (id) => `/${id}`,
      providesTags: ["User"],
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: (user) => ({
        url: `/${user.id}`,
        method: "PATCH",
        body: user,
      }),
      providesTags: ["User"],
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
      providesTags: ["User"],
      invalidatesTags: ["User"],
    }),
    suspendUser: build.mutation({
      query: (id) => ({
        url: `/${id}/suspend`,
        method: "PUT",
        credentials: "include",
      }),
      providesTags: ["User"],
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUsersQuery,
  useSuspendUserMutation,
} = userApi;
