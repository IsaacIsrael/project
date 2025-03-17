module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@constants': './src/constants',
          '@managers': './src/helpers/managers',
          '@utils': './src/helpers/utils',
          '@services': './src/services',
          '@styles': './src/styles',
          '@infra-types': './src/types/Infrastructure',
          '@store': './src/store',
          '@hooks': './src/helpers/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
