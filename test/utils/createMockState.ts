import merge from 'lodash/merge';

import rootReducer from '../../src/store/rootReducer';

import type { RootState } from '@infra-types/Store';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export default function createMockState(preloadedState?: DeepPartial<RootState>): RootState {
  const defaultState = rootReducer(undefined, { type: '@@INIT' });
  return merge({}, defaultState, preloadedState);
}
