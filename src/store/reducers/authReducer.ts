import { createSlice } from '@reduxjs/toolkit';
import { signInAction } from '../actions/signInActions';
import { signUpAction } from '../actions/signUpActions';

import { storage } from '~/utils/localStorage';

const initialToken = storage.get('Token');

type User = {
    id: string;
    email: string;
};

const initialState = {
    token: initialToken ? initialToken : '',
    isAuth: initialToken ? true : false,
    isSigned: false,
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
    user: { id: '', email: '' },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state) {
            storage.remove('Token');
            state.token = '';
            state.isAuth = false;
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
        builder.addCase(signInAction.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload as string;
        });
        builder.addCase(signUpAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUpAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user.email = (payload as User).email;
            state.user.id = (payload as User).id;
            state.isSigned = true;
        });
        builder.addCase(signUpAction.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = payload as string;
        });
    },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
