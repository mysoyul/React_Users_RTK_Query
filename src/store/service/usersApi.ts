import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import User from "types/User";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
            providesTags: ['Users'],
        }),
        getUserById: builder.query<User, string>({
            query: (id: string) => (`users/${id}`),
            providesTags: ['Users'],
        }),
        updateUser: builder.mutation<User, { id: string; data: Partial<User> }>({
            query: ({ id, data }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: data,
            }),
            //invalidatesTags: ['Users']
        }),
    }),
});
export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useUpdateUserMutation,
} = usersApi;    

