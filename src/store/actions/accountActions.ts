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

type Payload = {
    Token: string;
    data: { email: string; name: string; phoneNumber: string; password: string };
};

export const setAccountAction = createAsyncThunk(
    'setAccount',
    async (payload: Payload, { rejectWithValue }) => {
        try {
            const response = await mainApi.setUser(payload.Token, {
                email: payload.data.email,
                name: payload.data.name,
                phoneNumber: payload.data.phoneNumber,
                password: payload.data.password,
            });
            return response.data.user;
        } catch (err) {
            return rejectWithValue((err as AxiosError).response?.data);
        }
    },
);
