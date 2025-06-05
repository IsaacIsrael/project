/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-namespace */
import 'jest';

declare global {
  namespace jest {
    interface It {
      platform: jest.It;
    }
  }

  var test: jest.It;
}
