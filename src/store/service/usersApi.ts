import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import User from "types/User";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({

    }),
});

