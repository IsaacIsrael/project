import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: 'iphoneSE3',
      viewports: INITIAL_VIEWPORTS,
    },
  },

  tags: ['autodocs'],
};

export default preview;
