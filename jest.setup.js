const { default: EnvironmentManager } = require('helpers/managers/EnvironmentManager');

EnvironmentManager.initialize();

global.HermesInternal = {
  getRuntimeProperties: jest.fn().mockReturnValue({
    'OSS Release Version': '1.0.0', // Return the value you expect from HermesInternal
  }),
};

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('reactotron-react-native', () => ({
  clear: jest.fn(),
  configure: jest.fn().mockReturnThis(),
  useReactNative: jest.fn().mockReturnThis(),
  use: jest.fn().mockReturnThis(),
  connect: jest.fn().mockReturnThis(),
  error: jest.fn(),
  log: jest.fn(),
  openInEditor: jest.fn(),
  send: jest.fn(),
  trackError: jest.fn(),
  warn: jest.fn(),
  createEnhancer: jest.fn(),
  display: jest.fn(),
  onCustomCommand: jest.fn(),
}));

jest.mock('@utils/sleep', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('./.storybook.ondevice', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(null),
}));

jest.mock('@services/openURLInBrowser', () => ({
  __esModule: true,
  default: jest.fn(),
}));
