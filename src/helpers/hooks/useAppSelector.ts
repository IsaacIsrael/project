import { useSelector } from 'react-redux';

import type { RootState } from '@infra-types/Store';

/**
 * A typed version of the `useSelector` hook for accessing the Redux store state.
 *
 * @typeParam RootState - The type of the root state in the Redux store.
 * @returns A selector function that can be used to select parts of the state.
 */
const useAppSelector = useSelector.withTypes<RootState>();
export default useAppSelector;
