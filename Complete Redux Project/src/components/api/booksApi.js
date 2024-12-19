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
      addBook: builder.mutation({
        query: (newBook) => ({
          url: '/Books',
          method: 'POST',
          body: newBook,
        }),
      }),
    }),
  });

export const { useGetBooksQuery, useAddBookMutation } = booksApi