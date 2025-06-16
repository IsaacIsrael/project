const actual = jest.requireActual('redux-persist');

// eslint-disable-next-line no-undef
module.exports = {
  ...actual,
  persistStore: jest.fn().mockReturnValue({
    dispatch: jest.fn(),
    flush: jest.fn().mockResolvedValue(undefined),
    getState: jest.fn(),
    pause: jest.fn(),
    persist: jest.fn(),
    purge: jest.fn().mockResolvedValue(undefined),
    subscribe: jest.fn(() => jest.fn()),
  }),
};
