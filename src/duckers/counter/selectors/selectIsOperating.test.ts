import selectIsOperating from './selectIsOperating';

import createMockState from '@test/createMockState';
import { describeSelector } from '@test/describeApp';

describeSelector('counter - selectIsOperating', () => {
  test('should return false when status is "idle"', () => {
    const mockState = createMockState({
      counter: {
        status: 'idle',
      },
    });

    expect(selectIsOperating(mockState)).toBe(false);
  });

  test('should return true when status is "loading"', () => {
    const mockState = createMockState({
      counter: {
        status: 'loading',
      },
    });

    expect(selectIsOperating(mockState)).toBe(true);
  });
});
