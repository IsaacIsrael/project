/* eslint-disable @typescript-eslint/no-explicit-any */
import reactotron, { openInEditor } from 'reactotron-react-native';

import { name as appName } from '../../../app.json';

import EnvironmentConstant from '@constants/EnvironmentConstant';
import { isValidUrl } from '@utils/isValidUrl';

import type React from 'react';
import type { ArgType, ReactotronReactNative } from 'reactotron-react-native';

interface ReactotronManagerCommandConfig<A> {
  args?: Array<A>;
  description?: string;
  title?: string;
}

interface ReactotronManagerDefaultDisplayConfig {
  image?: string;
  name: string;
  preview?: string;
  value?: any;
}

interface ReactotronManagertLogConfig {
  important?: boolean;
  label?: string;
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

  private static generateDisplayDefaultConfig(value?: unknown): ReactotronManagerDefaultDisplayConfig {
    let config: ReactotronManagerDefaultDisplayConfig = {
      name: 'unknown',
    };
    switch (true) {
      case typeof value === 'string' && isValidUrl(value) && value.match(/\.(jpeg|jpg|gif|png)$/) !== null: {
        config = {
          image: value as string,
          name: 'image',
          preview: `Displaying image: ${value}`,
        };
        break;
      }
      case Array.isArray(value): {
        config = {
          name: 'array',
          preview: `Displaying array: [${value}]`,
          value,
        };
        break;
      }
      case typeof value === 'function': {
        config = {
          name: 'function',
          preview: `Displaying function: ${value.name || 'Anonymous'}`,
          value,
        };
        break;
      }
      case typeof value === 'object': {
        config = {
          name: 'object',
          preview: `Displaying object: ${JSON.stringify(value)}`,
          value,
        };
        break;
      }
      case typeof value === 'number': {
        config = {
          name: 'number',
          preview: `Displaying number: ${value}`,
          value,
        };
        break;
      }
      case typeof value === 'string': {
        config = {
          name: 'string',
          preview: `Displaying string: ${value}`,
          value,
        };
        break;
      }
      case typeof value === 'boolean': {
        config = {
          name: 'boolean',
          preview: `Displaying boolean: ${value}`,
          value,
        };
        break;
      }
      default:
        break;
    }
    return config;
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
  }

  static log(value: any, config?: ReactotronManagertLogConfig): void {
    if (!this.instance) {
      return;
    }

    const defaultConfig = this.generateDisplayDefaultConfig(value);

    this.instance.display({
      image: defaultConfig.image,
      important: config?.important,
      name: config?.label ?? defaultConfig.name,
      preview: config?.title ?? defaultConfig.preview,
      value: defaultConfig.value,
    });
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
