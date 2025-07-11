module.exports = {
  ...require('./test/jest.common.config'),
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname', 'jest-watch-select-projects'],
  projects: ['./test/jest.integration.config.js', './test/jest.unit.config.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage/',
        outputName: 'report.xml',
        suiteName: 'project',
        classNameTemplate: '{filepath}',
        titleTemplate: (vars) => {
          const classname = vars.classname.replace(/\x1B\[[0-9;]*[mK]/g, '');
          return `${classname} | ${vars.title}`;
        },
        suiteNameTemplate: (vars) => {
          return vars.title.replace(/\x1B\[[0-9;]*[mK]/g, '');
        },
      },
    ],
  ],
};
