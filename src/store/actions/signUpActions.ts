import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { mainApi } from '~/api/Api';

export const signUpAction = createAsyncThunk(
    'userSignUp',
    async (data: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await mainApi.signUp(data);
            return response.data;
        } catch (error) {
            return rejectWithValue((error as AxiosError).message);
        }
    },
);
