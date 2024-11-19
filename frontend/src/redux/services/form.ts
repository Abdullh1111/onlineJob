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
    formSubmission: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (data : any) => ({
        url: "form/submit",
        method: "POST",
        body: data,
      }),
    }),
  
  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFormSubmissionMutation } = formApi;
