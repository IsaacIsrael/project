import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@infra-types/Store';

/**
 * A custom hook that provides a typed version of the `useDispatch` hook from `react-redux`.
 *
 * This hook is specifically typed with `AppDispatch`, ensuring that dispatch actions
 * conform to the application's dispatch type, enhancing type safety and reducing errors.
 *
 * @returns {AppDispatch} The dispatch function with the application's specific type.
 */
const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default useAppDispatch;
