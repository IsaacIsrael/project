import type { AsyncThunk } from '@reduxjs/toolkit';
import type store from '@store';
import type rootReducer from '@store/rootReducer';

/**
 * Generic type for an AsyncThunk in Redux.
 *
 * @template Returned - The type of the value returned by the thunk.
 * @template ThunkArg - The type of the argument passed to the thunk.
 */
export type AppAsyncThunk<Returned, ThunkArg> = AsyncThunk<Returned, ThunkArg, AppAsyncThunkConfig>;

/**
 * Configuration for an AppAsyncThunkConfig in Redux.
 *
 * @property {AppDispatch} dispatch - The type of the store's dispatch.
 * @property {RootState} state - The type of the store's root state.
 */
export interface AppAsyncThunkConfig {
  /**
   * The type of the store's dispatch.
   */
  dispatch: AppDispatch;
  /**
   * The type of the store's root state.
   */
  state: RootState;
}

/**
 * The type of the store's dispatch.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * The type of the store's root state.
 */
export type RootState = ReturnType<typeof rootReducer>;
