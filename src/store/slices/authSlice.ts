import { createSlice } from '@reduxjs/toolkit';
import { decodeToken } from 'react-jwt';
import { api } from 'store/api';
import { IUser } from 'store/models/userModels';
import { RootState } from 'store/store';
import { ACCESS_TOKEN } from 'variables';

type AuthState = {
    user: IUser | null;
    accessToken: string | null;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, accessToken: null } as AuthState,
    reducers: {
        userLogout: (state) => {
            console.log('разлогинились!');

            localStorage.removeItem(ACCESS_TOKEN);
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.authSignin.matchFulfilled, (state, { payload }) => {
            state.user = decodeToken(payload.accessToken) as IUser;
        });
    },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
