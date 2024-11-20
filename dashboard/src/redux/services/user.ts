/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainUrl } from "@/URL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: mainUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (data : any) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
    }),


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUser: builder.query<any, void>({
      query: () => ({
        url: "user/userdata",
        method: "GET",
      }),
    }),

    logoutUser: builder.query<any, void>({
      query: () => ({
        url: "user/logout",
        method: "GET",
      }),
    }),

    allUser: builder.query<any, void>({
      query: () => ({
        url: "user/alluser",
        method: "GET",
      }),
    }),
  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation,  useGetUserQuery, useLazyLogoutUserQuery , useAllUserQuery } = userApi;
