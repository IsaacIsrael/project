import counterReducer, { setCounterValue } from './counter.slice';

import type { CounterState } from './counter.slice';

describeSlice('counter', () => {
  const initialState: CounterState = { status: 'idle', value: 0 };

  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle setCounterValue', () => {
    const actual = counterReducer(initialState, setCounterValue(10));
    expect(actual.value).toEqual(10);
  });

  test('should handle zero value', () => {
    const actual = counterReducer({ ...initialState, value: 5 }, setCounterValue(0));
    expect(actual.value).toEqual(0);
  });
});
