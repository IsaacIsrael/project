import type { AsyncThunk, EnhancedStore, StoreEnhancer, Tuple, UnknownAction } from '@reduxjs/toolkit';
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

export type AppStore = EnhancedStore<
  RootState,
  UnknownAction,
  Tuple<[StoreEnhancer<{ dispatch: AppDispatch }>, StoreEnhancer]>
>;

/**
 * Generic type for the value returned by an AsyncThunk.
 *
 * @template Returned - The type of the value returned by the thunk.
 * @template RejectWithValue - The type of the rejection value.
 */
export type AsyncThunkReturned<Returned, RejectWithValue> = Promise<
  | Awaited<Returned>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | Awaited<Returned extends any ? Promise<Returned> : never>
  | RejectWithValue
>;

/**
 * The type of the store's root state.
 */
export type RootState = ReturnType<typeof rootReducer>;
