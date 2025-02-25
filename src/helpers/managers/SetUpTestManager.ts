/* eslint-disable no-console */
import LoggerManager from './LoggerManager';

import ReactotronManager from '@managers/ReactotronManager';

class SetUpTestManager {
  private static testAddReactotronCustomCommands(): void {
    ReactotronManager.addCustomCommand((args) => {
      console.log('Hello world', args);
    });
    ReactotronManager.addCustomCommand(
      () => {
        console.log('Hello world');
      },
      {
        description: 'Test the Reactotrom Commands',
        title: 'Hello world',
      },
    );
    ReactotronManager.addCustomCommand(
      (args) => {
        console.log(`Routes: `, args);
      },
      {
        args: ['route1', 'route2'],
        description: 'Navigates to a screen by name.',
        title: 'Navigate To Screen',
      },
    );
    ReactotronManager.addCustomCommand(
      () => {
        this.testReactotronDisplay();
      },
      {
        title: 'Test Reactotron display',
      },
    );
    ReactotronManager.addCustomCommand(
      () => {
        this.testLog();
      },
      {
        title: 'Test Log display',
      },
    );
  }

  private static testLog(): void {
    LoggerManager.debug('Debug message');
    LoggerManager.error('Error message');
    LoggerManager.info('Info message');
    LoggerManager.success('Success message');
    LoggerManager.warn('Warn message');
    const logTestMessage = (): void => {
      const _a = 1;
    };
    LoggerManager.debug('Function', logTestMessage);
    LoggerManager.debug('Array', [1, 2, 3]);
    LoggerManager.debug('Array', ['Oi', 'Hello', 'Hola', logTestMessage, 'test']);
    LoggerManager.debug('Object', {
      foo: () => {
        const _a = 1;
      },
      key: 'value',
      test: [1, 2, 3],
      value: 1,
    });
    LoggerManager.debug('Object', 'Test', {
      foo: () => {
        const _a = 1;
      },
      key: 'value',
      test: [1, 2, 3],
      value: 1,
    });
  }

  private static testReactotronDisplay(): void {
    const logTestMessage = (): void => {
      const _a = 1;
    };
    ReactotronManager.log(logTestMessage);
    ReactotronManager.log((): void => {
      const _a = 1;
    });
    ReactotronManager.log(true);
    ReactotronManager.log(123);
    ReactotronManager.log('Hello world');
    ReactotronManager.log({
      foo: () => {
        const _a = 1;
      },
      key: 'value',
      test: [1, 2, 3],
      value: 1,
    });
    ReactotronManager.log(['Oi', 'Hello', 'Hola', logTestMessage, 'test']);
    ReactotronManager.log('https://reactnative.dev/img/tiny_logo.png', {
      important: true,
    });

    ReactotronManager.log('https://gifmania.com.br/wp-content/uploads/2024/10/oi-amor.gif', {
      important: true,
      label: 'gift',
    });
    ReactotronManager.log(['Oi', 'Hello', 'Hola', logTestMessage, 'test'], {
      title: 'Custom title',
    });
  }

  static initialize(): void {
    this.testAddReactotronCustomCommands();
  }
}

export default SetUpTestManager;
