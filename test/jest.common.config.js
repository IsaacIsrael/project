const path = require('path');

module.exports = {
  preset: 'react-native',
  rootDir: path.join(__dirname, '..'),
  setupFiles: ['<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js', '<rootDir>/test/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/android/', '<rootDir>/ios/', '<rootDir>/docs/'],
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/helpers/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/helpers/hooks/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@duckers/(.*)$': '<rootDir>/src/duckers/$1',
    '^@managers/(.*)$': '<rootDir>/src/helpers/managers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@infra-types/(.*)$': '<rootDir>/src/types/Infrastructure/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
    '^/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!react-native|react-redux)/'],
};
