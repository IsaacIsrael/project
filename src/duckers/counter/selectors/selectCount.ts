import type { RootState } from '@infra-types/Store';

/**
 * Selector to get the counter value from the root state.
 *
 * @param {RootState} state - The root state of the application.
 * @returns {number} The current value of the counter.
 */
const selectCount = (state: RootState): number => state.counter.value;

export default selectCount;
