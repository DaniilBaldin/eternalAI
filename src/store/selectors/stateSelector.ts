import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const stateSelector = createSelector(
    (state: RootState) => state,
    (items) => items,
);
