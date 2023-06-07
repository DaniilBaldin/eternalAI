import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authReducer';
import subscribeSlice from './reducers/subscribeReducer';

export const store = configureStore({
    reducer: {
        authSlice: authSlice,
        subscribeSlice: subscribeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
