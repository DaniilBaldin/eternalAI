import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { mainApi } from '~/api/Api';

type Payload = {
    Token: string;
    data: {
        cardNumber: string;
        expMonth: number;
        expYear: number;
        cvc: string;
    };
};

export const subscribeAction = createAsyncThunk(
    'subscribeAccount',
    async (payload: Payload, { rejectWithValue }) => {
        try {
            const response = await mainApi.subscribeUser(payload.Token, {
                cardNumber: payload.data.cardNumber,
                expMonth: payload.data.expMonth,
                expYear: payload.data.expYear,
                cvc: payload.data.cvc,
            });
            return response.data.subscription;
        } catch (err) {
            return rejectWithValue((err as AxiosError).response?.data);
        }
    },
);

export const unsubscribeAction = createAsyncThunk(
    'unsubscribeAccount',
    async (Token: string, { rejectWithValue }) => {
        try {
            const response = await mainApi.unsubscribeUser(Token);
            return response.data;
        } catch (err) {
            return rejectWithValue((err as AxiosError).response?.data);
        }
    },
);

export const updateSubscription = createAsyncThunk(
    'updateSubscription',
    async (payload: Payload, { rejectWithValue }) => {
        try {
            const response = await mainApi.updateSubscription(payload.Token, {
                cardNumber: payload.data.cardNumber,
                expMonth: payload.data.expMonth,
                expYear: payload.data.expYear,
                cvc: payload.data.cvc,
            });
            return response.data;
        } catch (err) {
            return rejectWithValue((err as AxiosError).response?.data);
        }
    },
);
