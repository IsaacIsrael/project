import LoggerManager from 'helpers/managers/LoggerManager';

import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AppAsyncThunk, AppAsyncThunkConfig, AsyncThunkReturned } from '@infra-types/Store';
import type { AsyncThunkOptions, AsyncThunkPayloadCreator, GetThunkAPI } from '@reduxjs/toolkit';

function thunkLoggerHandler<Returned, ThunkArg>(
  callback: AsyncThunkPayloadCreator<Returned, ThunkArg, AppAsyncThunkConfig>,
): AsyncThunkPayloadCreator<Returned, ThunkArg, AppAsyncThunkConfig> {
  return async (
    value: ThunkArg,
    thunkAPI: GetThunkAPI<AppAsyncThunkConfig>,
  ): AsyncThunkReturned<Returned, ReturnType<typeof thunkAPI.rejectWithValue>> => {
    const actionName = callback.name;
    try {
      LoggerManager.info(`THUNKS:: Initialize ${actionName}`);
      const response = await callback(value, thunkAPI);
      LoggerManager.success(`THUNKS:: Finished ${actionName} with success`);
      return response;
    } catch (error) {
      LoggerManager.error(`THUNKS:: Failed ${actionName}: ${error}`);
      throw error;
    }
  };
}

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
  const loggerCallback = thunkLoggerHandler<Returned, ThunkArg>(payloadCreator);
  return createAsyncThunk<Returned, ThunkArg, AppAsyncThunkConfig>(typePrefix, loggerCallback, options);
}
