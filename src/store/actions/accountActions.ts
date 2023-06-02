import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { mainApi } from '~/api/Api';

export const getAccountAction = createAsyncThunk(
    'getAccount',
    async (Token: string, { rejectWithValue }) => {
        try {
            const response = await mainApi.getUser(Token);
            return response.data.user;
        } catch (err) {
            return rejectWithValue((err as AxiosError).response?.data);
        }
    },
);
