import rootReducer from '../src/store/rootReducer';

import { configureStore } from '@reduxjs/toolkit';

import type { AppStore, RootState } from 'types/Infrastructure/Store';

export default function setupStore(preloadedState?: Partial<RootState>): AppStore {
  const defaultState = rootReducer(undefined, { type: '@@INIT' });
  return configureStore({
    preloadedState: { ...defaultState, ...preloadedState } as RootState,
    reducer: rootReducer,
  });
}
