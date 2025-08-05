/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { execSync } = require('child_process');
const path = require('path');

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (_output) => {
    const previousFolder = path.resolve(__dirname, '../../');
    try {
      app.logger.info('Initialize storybook build...');
      await execSync('npm run storybook:web:build', { cwd: previousFolder, stdio: 'inherit' });
      app.logger.info('Storybook Build finished with succeeded!');
    } catch (error) {
      app.logger.error('Error to build Storybook:', error);
    }
  });
}

module.exports = { load };
