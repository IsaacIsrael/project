import merge from 'lodash/merge';

import rootReducer from '../src/store/rootReducer';

import type { RootState } from '@infra-types/Store';
import type { DeepPartial } from '@test/Type';

export default function createMockState(preloadedState?: DeepPartial<RootState>): RootState {
  const defaultState = rootReducer(undefined, { type: '@@INIT' });
  return merge({}, defaultState, preloadedState);
}
