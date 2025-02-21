/* eslint-disable @typescript-eslint/no-explicit-any */
import reactotron, { openInEditor } from 'reactotron-react-native';

import { name as appName } from '../../../app.json';

import EnvironmentConstant from '@constants/EnvironmentConstant';

import type React from 'react';
import type { ReactotronReactNative } from 'reactotron-react-native';

class ReactotronManager {
  private static instance: ReactotronReactNative;

  static initialize(): void {
    if (this.instance || !EnvironmentConstant.isLocal) {
      return;
    }
    this.instance = reactotron
      .configure({
        name: appName,
      })
      .useReactNative({
        devTools: false,
        editor: true,
        errors: false,
        log: true,
        networking: {
          ignoreUrls: /symbolicate/,
        },
        overlay: true,
        storybook: true,
      })
      .use(openInEditor())
      .connect();

    this.instance.log('Reactotron Configured');
  }

  static setupApp(wrappedComponent: React.FC): React.FC {
    if (!EnvironmentConstant.isLocal) {
      return wrappedComponent;
    }

    if (!this.instance) {
      this.initialize();
    }

    return this.instance.overlay(wrappedComponent);
  }
}

export default ReactotronManager;
