import { TagsEnum } from 'store/api';
import {
    IAuthSigninRequest,
    IAuthSigninResponse,
    IAuthSignupRequest,
    IAuthSignupResponse,
} from 'store/models/authModels';
import { BuildType } from 'store/types';

export const authEndpoints = (builder: BuildType) => {
    return {
        /** Регистрация */
        authSignup: builder.mutation<IAuthSignupResponse, IAuthSignupRequest>({
            query: (body) => ({ url: 'auth/signup', body, method: 'POST' }),
            invalidatesTags: [TagsEnum.Auth],
        }),
        /** Авторизация */
        authSignin: builder.mutation<IAuthSigninResponse, IAuthSigninRequest>({
            query: (body) => ({ url: 'auth/signin', body, method: 'POST' }),
            invalidatesTags: [TagsEnum.Auth],
        }),
        // /** Запрос пользователя */
        // getUser: builder.query<IAuthUserResponse, IAuthUserRequest>({
        //     query: (body) => ({ url: 'auth/signin', body, method: 'GET' }),
        //     providesTags: [TagsEnum.Auth],
        // }),
    };
};
