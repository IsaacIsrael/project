import type React from 'react';
import type _Reactotron from 'reactotron-react-native';

declare module 'reactotron-react-native' {
  export enum ArgType {
    String = 'string',
  }

  interface ReactotronReactNative {
    overlay: (WrappedComponent: React.FC) => React.FC;
    storybookSwitcher: (storybookUi: React.FC) => (WrappedComponent: React.FC) => React.FC;
  }
}
