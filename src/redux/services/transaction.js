import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transaction = createApi({
  reducerPath: "query/transaction",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.230.243.8:10003",
  }),
  endpoints: (builder) => ({
    getTransaction: builder.query({
      query: (token) => ({
        url: `/transaction`,
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
    }),
  }),
});

export const { useGetTransactionQuery } = transaction;
