import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonials = createApi({
  reducerPath: "query/testimonials",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.198.222.47:10003",
  }),
  endpoints: (builder) => ({
    listTestimonials: builder.query({
      query: (page) => `/testimonials?page=${page}`,
    }),
  }),
});

export const { useListTestimonialsQuery } = testimonials;
