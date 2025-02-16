import type { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook'],
  docs: {},
  framework: '@storybook/react-native-web-vite',
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default main;
