import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const errorSelector = createSelector(
    (state: RootState) => state.authSlice.errorMessage,
    (items) => items,
);
