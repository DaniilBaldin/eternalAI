import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const userSelector = createSelector(
    (state: RootState) => state.authSlice.user,
    (items) => items,
);
