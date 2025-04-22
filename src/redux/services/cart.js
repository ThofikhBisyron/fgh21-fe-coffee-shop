import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cart = createApi({
  reducerPath: "query/cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8888",
  }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (token) => ({
        url: `/carts`,
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
    }),
  }),
});

export const { useGetCartQuery } = cart;
