const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);
const enabledStorybook = process.env.STORYBOOK === 'true' || process.env.ENV === 'local';
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

      if (!enabledStorybook && defaultResolveResult?.filePath?.includes?.('.storybook.ondevice/')) {
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
  enabled: enabledStorybook,
  configPath: path.resolve(__dirname, './.storybook.ondevice'),
});
