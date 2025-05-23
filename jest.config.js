module.exports = {
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname', 'jest-watch-select-projects'],
  projects: ['./test/jest.integration.config.js', './test/jest.logic.config.js'],
};
