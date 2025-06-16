module.exports = {
  ...require('./jest.common.config'),
  displayName: 'integration',
  testMatch: ['**/screens/**/*.+(spec|test).+(ts|tsx|js|jsx)'],
};
