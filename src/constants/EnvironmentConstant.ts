const EnvironmentConstant = {
  isLocal: __DEV__,
  isStorybook: process.env.STORYBOOK === 'true',
} as const;

export default EnvironmentConstant;
