import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { signInAction } from '../actions/signInActions';
import { signUpAction } from '../actions/signUpActions';

import { storage } from '~/services/localStorage';
import { getAccountAction, setAccountAction } from '../actions/accountActions';

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

type Token = string | null;

type ErrorResponse = {
    message: string;
    success: boolean;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logIn: (state, action: PayloadAction<Token>) => {
            storage.set('Token', action.payload);
            state.token = action.payload as string;
            state.isSuccess = true;
            state.isAuth = true;
        },
        logOut(state) {
            storage.remove('Token');
            state.token = '';
            state.isAuth = false;
        },
        resetError(state) {
            state.errorMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signInAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            const token = payload.token;
            storage.set('Token', token);
            state.token = token;
            state.isAuth = true;
        });
        builder.addCase(signInAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
        builder.addCase(signUpAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUpAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user.email = payload.user.email;
            state.user.id = payload.user.id;
            state.isSigned = true;
        });
        builder.addCase(signUpAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
        builder.addCase(getAccountAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAccountAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            if (
                payload.subscriptionExpiresAt !== null &&
                new Date(payload.subscriptionExpiresAt * 1000).getTime() >= new Date().getTime()
            ) {
                state.isSubscribed = true;
            } else {
                state.isSubscribed = false;
            }
        });
        builder.addCase(getAccountAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
        builder.addCase(setAccountAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(setAccountAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            console.log(payload);
            state.user = payload;
        });
        builder.addCase(setAccountAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = (action.payload as ErrorResponse).message as string;
        });
    },
});

export const { logIn, logOut, resetError } = authSlice.actions;

export default authSlice.reducer;
