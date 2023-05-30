import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const authSelector = createSelector(
    (state: RootState) => state.authSlice.user,
    (items) => items,
);
