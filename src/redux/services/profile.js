import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profile = createApi({
  reducerPath: "query/profile",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://143.198.222.47:10003",
  }),
  endpoints: (builder) => ({
    listProfile: builder.query({
      query: () => `/profile`,
    }),
    getProfile: builder.query({
      query: (id) => `/profile/${id}`,
    }),
  }),
});

export const { useListProfileQuery, useGetProfileQuery } = profile;
