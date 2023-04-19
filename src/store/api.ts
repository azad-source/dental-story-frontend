import { createApi } from '@reduxjs/toolkit/query/react';
import { authEndpoints } from './endpoints/authEndpoints';
import { axiosBaseQuery } from './apiConfig';

export enum TagsEnum {
    Auth = 'Auth',
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery,
    tagTypes: Object.keys(TagsEnum),
    endpoints: (builder) => ({
        ...authEndpoints(builder),
    }),
});

export const { useAuthSignupMutation, useAuthSigninMutation } = api;
