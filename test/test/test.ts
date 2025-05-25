/* eslint-disable no-fallthrough */
import chalk from 'chalk';
import { Platform } from 'react-native';

import { test as originalTest } from '@jest/globals';

interface PlatformSelect {
  android?: unknown;
  default?: unknown;
  ios?: unknown;
  macos?: unknown;
  native?: unknown;
  web?: unknown;
  windows?: unknown;
}

function describeAndroid(fn: jest.EmptyFunction): void {
  const color = new chalk.Instance({ level: 3 });
  describe(color.green.dim('android'), () => {
    const originalPlatform = Platform.OS;
    let selectSpy: jest.SpyInstance;

    beforeAll(() => {
      Platform.OS = 'android';
      selectSpy = jest
        .spyOn(Platform, 'select')
        .mockImplementation((object: PlatformSelect) => object.android || object.native || object.default);
    });

    afterAll(() => {
      Platform.OS = originalPlatform;
      selectSpy.mockRestore();
    });

    fn();
  });
}

function describeIOS(fn: jest.EmptyFunction): void {
  const color = new chalk.Instance({ level: 3 });
  describe(color.whiteBright.dim('ios'), () => {
    const originalPlatform = Platform.OS;
    let selectSpy: jest.SpyInstance;

    beforeAll(() => {
      Platform.OS = 'ios';
      selectSpy = jest
        .spyOn(Platform, 'select')
        .mockImplementation((object: PlatformSelect) => object.ios || object.native || object.default);
    });

    afterAll(() => {
      Platform.OS = originalPlatform;
      selectSpy.mockRestore();
    });

    fn();
  });
}

export default function test(description: string, fn: jest.EmptyFunction, timeout?: number): void {
  const fnString = fn.toString();

  const runsOnAndroid = fnString.includes('assertionIfAndroid');
  const runsOnIOS = fnString.includes('assertionIfIOS');

  if (!runsOnAndroid && !runsOnIOS) {
    originalTest(description, fn);
    return;
  }

  if (runsOnAndroid) {
    describeAndroid(() => originalTest(description, fn, timeout));
  }

  if (runsOnIOS) {
    describeIOS(() => originalTest(description, fn, timeout));
  }
}
