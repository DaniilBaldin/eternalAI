import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const loadingSelector = createSelector(
    (state: RootState) => state.authSlice.isLoading,
    (items) => items,
);
