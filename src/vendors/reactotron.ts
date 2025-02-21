/* eslint-disable @typescript-eslint/no-explicit-any */

import type React from 'react';
import type _Reactotron from 'reactotron-react-native';

declare module 'reactotron-react-native' {
  interface ReactotronReactNative {
    overlay: (WrappedComponent: React.FC) => React.FC;
  }
}
