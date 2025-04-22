import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  docs: {},
  framework: '@storybook/react-native-web-vite',
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        minify: false,
      },
    });
  },
};

export default main;
