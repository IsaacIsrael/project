/* eslint-disable @typescript-eslint/no-explicit-any */
import reactotron, { openInEditor } from 'reactotron-react-native';

import { name as appName } from '../../../app.json';

import EnvironmentConstant from '@constants/EnvironmentConstant';

import type React from 'react';
import type { ArgType, ReactotronReactNative } from 'reactotron-react-native';

interface ReactotronManagerCommandConfig<A> {
  args?: Array<A>;
  description?: string;
  title?: string;
}

class ReactotronManager {
  private static commandListId: Set<number> = new Set();
  private static instance: ReactotronReactNative;

  private static generateCommandListId(): string {
    const maxId = this.commandListId.size === 0 ? 0 : Math.max(...this.commandListId);
    const id = maxId + 1;
    this.commandListId.add(id);
    return id.toString();
  }

  static addCustomCommand<A extends string>(
    callback: (params: Record<A, string>) => void,
    commandConfig?: ReactotronManagerCommandConfig<A>,
  ): void {
    if (!this.instance) {
      return;
    }

    const args = commandConfig?.args?.map((name) => ({
      name: name,
      type: 'string' as ArgType,
    }));

    const id = this.generateCommandListId();

    this.instance.onCustomCommand({
      args: args,
      command: id,
      description: commandConfig?.description ?? ' ',
      handler: (params) => {
        callback(params as Record<A, string>);
      },
      title: commandConfig?.title ?? `Custom Command ${id}`,
    });
  }

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

  static setupApp(storybookUi: React.FC, wrappedComponent: React.FC): React.FC {
    if (!EnvironmentConstant.isLocal) {
      return wrappedComponent;
    }

    if (!this.instance) {
      this.initialize();
    }

    const overladedComponent = this.instance.overlay(wrappedComponent);
    return this.instance.storybookSwitcher(storybookUi)(overladedComponent);
  }
}

export default ReactotronManager;
