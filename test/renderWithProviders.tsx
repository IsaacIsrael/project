import React from 'react';
import { Provider } from 'react-redux';

import setupStore from './setupStore';

import { render } from '@testing-library/react-native';

import type { RenderOptions, RenderResult } from '@testing-library/react-native';
import type { PropsWithChildren } from 'react';
import type { AppStore, RootState } from 'types/Infrastructure/Store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

interface StoreRenderResult extends RenderResult {
  store: AppStore;
}

const withWrapper = (store: AppStore) =>
  function withStore({ children }: PropsWithChildren): React.ReactElement {
    return <Provider store={store}>{children}</Provider>;
  };

export default function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
): StoreRenderResult {
  const { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = extendedRenderOptions;

  return {
    store,
    ...render(ui, { wrapper: withWrapper(store), ...renderOptions }),
  };
}
