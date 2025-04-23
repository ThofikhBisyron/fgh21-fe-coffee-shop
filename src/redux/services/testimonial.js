import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testimonials = createApi({
  reducerPath: "query/testimonials",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.230.243.8:10003",
  }),
  endpoints: (builder) => ({
    listTestimonials: builder.query({
      query: (page) => `/testimonials?page=${page}`,
    }),
  }),
});

export const { useListTestimonialsQuery } = testimonials;
