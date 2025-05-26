import sleep from 'helpers/utils/sleep';

import { CounterActions } from '../counter.constants';
import { setCounterValue } from '../counter.slice';
import increment from './increment.action';

import { setupStore } from '@test-utils';

describeAction('counter - increment', () => {
  const store = setupStore();
  beforeEach(() => {
    store.dispatch(setCounterValue(10));
    jest.clearAllMocks();
  });

  test('should increment the counter value after delay', async () => {
    expect(store.getState().counter.value).toBe(10);
    const resultAction = await store.dispatch(increment(3));

    expect(sleep).toHaveBeenCalledWith(1000);

    expect(store.getState().counter.value).toBe(13);

    expect(resultAction.type).toBe(`${CounterActions.increment}/fulfilled`);
    expect(resultAction.payload).toBe(13);
  });

  test('should handle multiple increments correctly', async () => {
    expect(store.getState().counter.value).toBe(10);

    await store.dispatch(increment(2));
    expect(store.getState().counter.value).toBe(12);

    await store.dispatch(increment(5));
    expect(store.getState().counter.value).toBe(17);
  });

  test('should allow incrementing to large values', async () => {
    expect(store.getState().counter.value).toBe(10);

    await store.dispatch(increment(100));
    expect(store.getState().counter.value).toBe(110);
  });

  test('should call sleep with the correct duration', async () => {
    await store.dispatch(increment(1));
    expect(sleep).toHaveBeenCalledWith(1000);
    expect(sleep).toHaveBeenCalledTimes(1);
  });
});
