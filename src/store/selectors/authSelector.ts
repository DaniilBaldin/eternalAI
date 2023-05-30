import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const authSelector = createSelector(
    (state: RootState) => state.authSlice.isAuth,
    (items) => items,
);

export const signUpSelector = createSelector(
    (state: RootState) => state.authSlice.isSigned,
    (items) => items,
);
