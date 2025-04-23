import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cart = createApi({
  reducerPath: "query/cart",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.230.243.8:10003",
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
