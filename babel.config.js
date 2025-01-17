module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@services': './src/services',
          '@styles': './src/styles',
          '@infra-types': './src/types/Infrastructure',
        },
      },
    ],
  ],
};
