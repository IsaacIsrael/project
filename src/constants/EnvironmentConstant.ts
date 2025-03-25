const EnvironmentConstant = {
  isLocal: __DEV__ && process.env.JEST_WORKER_ID === undefined,
  isStorybook: process.env.STORYBOOK === 'true',
  isTest: process.env.JEST_WORKER_ID !== undefined,
} as const;

export default EnvironmentConstant;
