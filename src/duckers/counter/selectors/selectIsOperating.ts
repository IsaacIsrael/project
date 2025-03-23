import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@infra-types/Store';

const selectCounterStatus = (state: RootState): 'idle' | 'loading' => state.counter.status;

/**
 * Selector to check if either the increment or decrement action is loading.
 *
 * @param {RootState} state - The root state of the application.
 * @returns {boolean} True if either the increment or decrement action is loading, false otherwise.
 */
const selectIsOperating = createSelector([selectCounterStatus], (status) => status === 'loading');

export default selectIsOperating;
