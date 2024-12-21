// src/redux/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'http://localhost:5000';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: (builder) => ({
        fetchUsers: builder.query({
            query: () => '/users',
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useFetchUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = apiSlice;