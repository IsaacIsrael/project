const common = require('./jest.common.config');

module.exports = {
  ...common,
  displayName: 'unit',
  testMatch: ['**/duckers/**/*.+(spec|test).+(ts|tsx|js|jsx)'],
  coveragePathIgnorePatterns: [
    ...common.coveragePathIgnorePatterns,
    '<rootDir>/src/components/',
    '<rootDir>/src/screens/',
    '<rootDir>/src/services/',
    '<rootDir>/src/helpers/',
    '<rootDir>/src/store/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
