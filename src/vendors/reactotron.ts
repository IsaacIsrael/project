import type React from 'react';
import type _Reactotron from 'reactotron-react-native';

declare module 'reactotron-react-native' {
  export enum ArgType {
    String = 'string',
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type CreateEnhancerReturn = (createStore: any) => (reducer: any, ...args: any[]) => any;

  interface ReactotronReactNative {
    createEnhancer: (skipSettingStore?: boolean) => CreateEnhancerReturn;
    overlay: (WrappedComponent: React.FC) => React.FC;
    storybookSwitcher: (storybookUi: React.FC) => (WrappedComponent: React.FC) => React.FC;
  }
}
