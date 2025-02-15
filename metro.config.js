const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      const defaultResolveResult = context.resolveRequest(context, moduleName, platform);

      if (process.env.STORYBOOK !== 'true' && defaultResolveResult?.filePath?.includes?.('.storybook.ondevice/')) {
        return {
          type: 'empty',
        };
      }

      return defaultResolveResult;
    },
  },
};

const finalConfig = mergeConfig(defaultConfig, config);

module.exports = withStorybook(finalConfig, {
  enabled: process.env.STORYBOOK === 'true',
  configPath: path.resolve(__dirname, './.storybook.ondevice'),
});
