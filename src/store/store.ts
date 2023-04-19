import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from 'store/api';
import authReducer from 'store/slices/authSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
    },
    middleware: (gDM) => gDM({ serializableCheck: false }).concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
