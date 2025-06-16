/* eslint-disable no-fallthrough */
import chalk from 'chalk';
import { Platform } from 'react-native';

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

export default function platform(description: string, fn: jest.EmptyFunction, timeout?: number): void {
  const callback: jest.EmptyFunction = () => test(description, fn, timeout);
  describeAndroid(callback);
  describeIOS(callback);
}
