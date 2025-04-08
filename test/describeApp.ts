import chalk from 'chalk';
import { Platform } from 'react-native';

const color = new chalk.Instance({ level: 3 });

interface Options {
  android?: jest.EmptyFunction;
  ios?: jest.EmptyFunction;
}

function describeAndroid(fn: () => void): void {
  describe(color.green.dim('android'), () => {
    beforeAll(() => {
      Platform.OS = 'android';
      Platform.select = jest.fn().mockImplementation((object) => object.android || object.default);
    });
    fn();
  });
}

function describeApp(description: string, fn: jest.EmptyFunction, fnOptions: Options = {}): void {
  describe(description, () => {
    describeIOS(() => {
      fn();
      if (fnOptions.ios) {
        fnOptions.ios();
      }
    });
    describeAndroid(() => {
      fn();
      if (fnOptions.android) {
        fnOptions.android();
      }
    });
  });
}

function describeIOS(fn: () => void): void {
  describe(color.whiteBright.dim('ios'), () => {
    beforeAll(() => {
      Platform.OS = 'ios';
      Platform.select = jest.fn().mockImplementation((object) => object.ios || object.default);
    });
    fn();
  });
}

export function describeAction(description: string, fn: jest.EmptyFunction, fnOptions?: Options): void {
  describeApp(`${color.bgBlue.blackBright.bold('[ACTION]')} - ${color.blue.bold(description)}`, fn, fnOptions);
}

export function describeEventScreen(fn: jest.EmptyFunction, fnOptions?: Options): void {
  describeApp(color.magenta('events'), fn, fnOptions);
}

export function describeRenderScreen(fn: jest.EmptyFunction, fnOptions?: Options): void {
  describeApp(color.magenta('render'), fn, fnOptions);
}

export function describeScreen(description: string, fn: jest.EmptyFunction): void {
  describe(`${color.bgMagenta.white.bold('[SCREEN]')} - ${color.magenta.bold(description)}`, fn);
}

export function describeSelector(description: string, fn: jest.EmptyFunction, fnOptions?: Options): void {
  describeApp(`${color.bgYellow.gray.bold('[SELECTOR]')} - ${color.yellow.bold(description)}`, fn, fnOptions);
}

export function describeSlice(description: string, fn: jest.EmptyFunction, fnOptions?: Options): void {
  describeApp(`${color.bgCyan.gray.bold('[SLICE]')} - ${color.cyan.bold(description)}`, fn, fnOptions);
}
