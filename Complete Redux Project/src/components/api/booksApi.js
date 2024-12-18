import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
      getBooks: builder.query({
        query: () => '/Books',
        providesTags: ['Books'],
      }),
      getUser: builder.query({
        query: (id) => `/users/${id}`,
        providesTags: ['User'],
      }),
    }),
  });

export const { useGetBooksQuery } = booksApi