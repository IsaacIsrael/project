jest.mock('@react-native-async-storage/async-storage');

jest.mock('reactotron-react-native');

jest.mock('@utils/sleep');

jest.mock('../.storybook.ondevice', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(null),
}));

jest.mock('redux-persist');
