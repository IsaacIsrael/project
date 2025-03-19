import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AppAsyncThunk, AppAsyncThunkConfig } from '@infra-types/Store';
import type { AsyncThunkOptions, AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

/**
 * Creates an asynchronous thunk action with integrated logging and request handling.
 *
 * @template Returned - The type of the value returned by the thunk.
 * @template ThunkArg - The type of the argument passed to the thunk.
 * @param {string} typePrefix - A string prefix for the action type.
 * @param {AsyncThunkPayloadCreator<Returned, ThunkArg, AppAsyncThunkConfig>} payloadCreator - A function that returns a promise with the payload.
 * @param {AsyncThunkOptions<ThunkArg, AppAsyncThunkConfig>} [options] - Optional configuration for the thunk.
 * @returns {AppAsyncThunk<Returned, ThunkArg>} - The created async thunk action.
 */
export default function createAppAsyncThunk<Returned, ThunkArg>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, AppAsyncThunkConfig>,
  options?: AsyncThunkOptions<ThunkArg, AppAsyncThunkConfig>,
): AppAsyncThunk<Returned, ThunkArg> {
  return createAsyncThunk<Returned, ThunkArg, AppAsyncThunkConfig>(typePrefix, payloadCreator, options);
}
