export default {
  entryPoints: ['../src'],
  excludeNotDocumented: true,
  tsconfig: '../tsconfig.json',
  entryPointStrategy: 'expand',
  readme: 'none',
  pageTitleTemplates: {
    index: 'Documentation',
    module: (args) => {
      const names = args.name.split('/');
      return names[names.length - 1];
    },
  },
  membersWithOwnFile: [],
  parametersFormat: 'table',
  enumMembersFormat: 'table',
  hideGroupHeadings: true,
  useCodeBlocks: true,
  disableSources: true,
};
