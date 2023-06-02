import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const tokenSelector = createSelector(
    (state: RootState) => state.authSlice.token,
    (items) => items,
);
