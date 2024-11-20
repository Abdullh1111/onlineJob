/* eslint-disable @typescript-eslint/no-explicit-any */
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
    pendingForms: builder.query<void, void>({
      query: () => ({
        url: "form/pendingreq",
        method: "GET",
      }),
    }),

    finishedForms: builder.query<void, void>({
      query: () => ({
        url: "form/finishedreq",
        method: "GET",
      }),
    }),

    getAllForms: builder.query<any, void>({
      query: () => ({
        url: "form/getall",
        method: "GET",
      }),
    }),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getByIdForm: builder.query<any, string>({
      query: (id) => ({
        url: `form/GetById/:?id=${id}`,
        method: "GET",
      }),
    }),

    updateForms: builder.mutation<void, any>({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (body: any) => ({
        url: "form/update",
        method: "PUT",
        body: body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  usePendingFormsQuery,
  useFinishedFormsQuery,
  useGetAllFormsQuery,
  useGetByIdFormQuery,
  useUpdateFormsMutation,
} = formApi;
