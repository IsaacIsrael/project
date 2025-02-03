/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fs = require('fs');
const path = require('path');

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (_output) => {
    const previousReadmePath = path.resolve(__dirname, '../../README.md');
    const currentReadmePath = path.resolve(__dirname, '../docs/api/getting-start.md');
    try {
      await fs.promises.copyFile(previousReadmePath, currentReadmePath);
      app.logger.info('README.md copied successfully');
    } catch (error) {
      app.logger.error(`Error copying README.md from ${previousReadmePath} to ${currentReadmePath}: ${error.message}`);
    }
  });
}

module.exports = { load };
