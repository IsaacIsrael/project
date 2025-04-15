import selectCount from './selectCount';

import createMockState from '@test/createMockState';
import { describeSelector } from '@test/describeApp';

describeSelector('counter - selectCount', () => {
  test('should return the counter value from state', () => {
    const mockState = createMockState({
      counter: {
        value: 10,
      },
    });

    expect(selectCount(mockState)).toEqual(10);
  });

  test('should return 0 when the counter value is 0', () => {
    const mockState = createMockState({
      counter: {
        value: 0,
      },
    });

    expect(selectCount(mockState)).toEqual(0);
  });

  test('should return negative value when the counter value is negative', () => {
    const mockState = createMockState({
      counter: {
        value: -5,
      },
    });

    expect(selectCount(mockState)).toEqual(-5);
  });
});
