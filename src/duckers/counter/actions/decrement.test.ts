import sleep from 'helpers/utils/sleep';

import { CounterActions } from '../counter.constants';
import decrement from './decrement.action';

import { setupStore } from '@test-utils';

import type { AppStore } from 'types/Infrastructure/Store';

describeAction('counter - decrement', () => {
  let store: AppStore;

  beforeEach(() => {
    store = setupStore({ preloadedState: { counter: { value: 10 } } });
    jest.clearAllMocks();
  });

  test('should decrement the counter value after delay', async () => {
    const resultAction = await store.dispatch(decrement(3));

    expect(sleep).toHaveBeenCalledWith(1000);
    expect(sleep).toHaveBeenCalledTimes(1);

    expect(store.getState().counter.value).toBe(7);

    expect(resultAction.type).toBe(`${CounterActions.decrement}/fulfilled`);
    expect(resultAction.payload).toBe(7);
  });

  test('should handle multiple decrements correctly', async () => {
    await store.dispatch(decrement(2));
    expect(store.getState().counter.value).toBe(8);

    await store.dispatch(decrement(5));
    expect(store.getState().counter.value).toBe(3);
  });

  test('should allow decrementing to negative values', async () => {
    await store.dispatch(decrement(15));
    expect(store.getState().counter.value).toBe(-5);
  });

  test('should call sleep with the correct duration', async () => {
    await store.dispatch(decrement(1));
    expect(sleep).toHaveBeenCalledWith(1000);
    expect(sleep).toHaveBeenCalledTimes(1);
  });
});
