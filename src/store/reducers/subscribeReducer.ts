import { createSlice } from '@reduxjs/toolkit';

import { storage } from '~/services/localStorage';
import {
    subscribeAction,
    unsubscribeAction,
    updateSubscription,
} from '../actions/subscribeActions';

const initialToken = storage.get('Token');

type initialState = {
    token: string;
    isAuth: boolean;
    isSigned: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isSubscribed: boolean;
    errorMessage: string;
    user: {
        id: string;
        email: string;
        name: string;
        method: string;
        phoneNumber: string;
        stripeId: string;
        subscriptionExpiresAt: number;
        hasSubscription: boolean;
    };
};

const initialState = {
    token: initialToken ? initialToken : '',
    isAuth: initialToken ? true : false,
    isSigned: false,
    isLoading: false,
    isSuccess: false,
    isSubscribed: false,
    errorMessage: '',
    user: {
        id: '',
        email: '',
        name: '',
        method: '',
        phoneNumber: '',
        stripeId: '',
        subscriptionExpiresAt: 0,
        hasSubscription: false,
    },
};

type ErrorResponse = {
    message: string;
    success: boolean;
};

export const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(subscribeAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(subscribeAction.fulfilled, (state) => {
            state.isLoading = false;
            state.isSubscribed = true;
        });
        builder.addCase(subscribeAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
        builder.addCase(unsubscribeAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(unsubscribeAction.fulfilled, (state) => {
            state.isLoading = false;
            state.isSubscribed = false;
        });
        builder.addCase(unsubscribeAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
        builder.addCase(updateSubscription.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateSubscription.fulfilled, (state) => {
            state.isLoading = false;
            state.isSubscribed = true;
        });
        builder.addCase(updateSubscription.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
    },
});

export default subscribeSlice.reducer;
