import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const subscribeSelector = createSelector(
    (state: RootState) => state.authSlice.isSubscribed,
    (items) => items,
);
