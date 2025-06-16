import sleep from 'helpers/utils/sleep';

import { CounterActions } from '../counter.constants';
import increment from './increment.action';

import { setupStore } from '@test-utils';

import type { AppStore } from 'types/Infrastructure/Store';

describeAction('counter - increment', () => {
  let store: AppStore;
  beforeEach(() => {
    store = setupStore({ preloadedState: { counter: { value: 10 } } });
    jest.clearAllMocks();
  });

  test('should increment the counter value after delay', async () => {
    const resultAction = await store.dispatch(increment(3));

    expect(sleep).toHaveBeenCalledWith(1000);
    expect(sleep).toHaveBeenCalledTimes(1);

    expect(store.getState().counter.value).toBe(13);

    expect(resultAction.type).toBe(`${CounterActions.increment}/fulfilled`);
    expect(resultAction.payload).toBe(13);
  });

  test('should handle multiple increments correctly', async () => {
    await store.dispatch(increment(2));
    expect(store.getState().counter.value).toBe(12);

    await store.dispatch(increment(5));
    expect(store.getState().counter.value).toBe(17);
  });

  test('should allow incrementing to large values', async () => {
    await store.dispatch(increment(100));
    expect(store.getState().counter.value).toBe(110);
  });

  test('should call sleep with the correct duration', async () => {
    await store.dispatch(increment(1));
    expect(sleep).toHaveBeenCalledWith(1000);
    expect(sleep).toHaveBeenCalledTimes(1);
  });
});
