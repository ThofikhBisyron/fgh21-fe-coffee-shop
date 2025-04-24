import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "query/product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.198.222.47:10003",
  }),
  endpoints: (builder) => ({
    listProducts: builder.query({
      query: ([page, limit]) =>
        `/products/our-product/?page=${page}&limit=${limit}`,
    }),
    getProducts: builder.query({
      query: (id) => `/products/our-product/${id}`,
    }),
  }),
});

export const { useListProductsQuery, useGetProductsQuery } = products;
