import rootReducer from '../../src/store/rootReducer';
import createMockState from './createMockState';

import { configureStore } from '@reduxjs/toolkit';

import type { DeepPartial } from './createMockState';
import type { AppStore, RootState } from 'types/Infrastructure/Store';

interface Option {
  preloadedState?: DeepPartial<RootState>;
}

export default function setupStore(options?: Option): AppStore {
  return configureStore({
    preloadedState: createMockState(options?.preloadedState),
    reducer: rootReducer,
  });
}
