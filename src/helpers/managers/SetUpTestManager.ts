/* eslint-disable no-console */
import ReactotronManager from '@managers/ReactotronManager';

class SetUpTestManager {
  private static testAddReactotronCustomCommands(): void {
    ReactotronManager.addCustomCommand((args) => {
      console.log('Hello world', args);
    });
    ReactotronManager.addCustomCommand(
      (args) => {
        console.log('Hello world', args);
      },
      {
        description: 'Test the Reactotrom Commands',
        title: 'Hello world',
      },
    );
    ReactotronManager.addCustomCommand(
      (args) => {
        console.log(`Navigating to: `, args);
      },
      {
        args: ['route1', 'route2'],
        description: 'Navigates to a screen by name.',
        title: 'Navigate To Screen',
      },
    );
  }
  static initialize(): void {
    this.testAddReactotronCustomCommands();
  }
}

export default SetUpTestManager;
