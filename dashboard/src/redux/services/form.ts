import { mainUrl } from "@/URL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: mainUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    pendingForms: builder.query<void,void>({
      query: () => ({
        url: "form/pendingreq",
        method: "GET",
      }),
    }),

    finishedForms: builder.query<void,void>({
      query: () => ({
        url: "form/finishedreq",
        method: "GET",
      }),
    })
  
  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePendingFormsQuery, useFinishedFormsQuery } = formApi;
