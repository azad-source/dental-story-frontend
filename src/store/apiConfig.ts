import { isExpired } from 'react-jwt';
import { BaseQueryFnType } from './types';
import axios from 'axios';
import { ACCESS_TOKEN } from 'variables/fieldVariables';
import { createAuthProvider } from 'react-token-auth';
import { getAuthToken } from 'helpers/tokenHelper';

type Session = { accessToken: string /*refreshToken: string*/ };

export const { useAuth, authFetch, login, logout } = createAuthProvider<Session>({
    getAccessToken: (session) => session.accessToken || getAuthToken().access,
    storage: localStorage,
    // onUpdateToken: (token) =>
    //     fetch('/update-token', {
    //         method: 'POST',
    //         body: token.refreshToken,
    //     }).then((r) => r.json()),
});

export function delay(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

export const baseURL = process.env.BASE_API_URL || 'http://localhost:8080/api';

export const axiosBaseQuery: BaseQueryFnType = async (
    { url, method, body, params, headers },
    api,
) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    const isExpiredToken = isExpired(token || '');

    if (isExpiredToken && !['authSignup', 'authSignin'].includes(api.endpoint)) {
        throw new Error('access_token is undefined');
    }

    try {
        /** TODO: имитация задержки. Нужно будет убрать */
        await delay(1000);
        const response = await axios({
            baseURL,
            method,
            url,
            data: body,
            params,
            headers: { ...headers, Authorization: `${token}` },
        });
        if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
        }

        return response;
    } catch (axiosError: any) {
        return axiosError;
    }
};
