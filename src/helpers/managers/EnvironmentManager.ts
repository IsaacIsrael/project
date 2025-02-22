import App from 'App';

import StorybookUIRoot from '../../../.storybook.ondevice';

import EnvironmentConstant from '@constants/EnvironmentConstant';
import ReactotronManager from '@managers/ReactotronManager';
import SetUpTestManager from '@managers/SetUpTestManager';

/**
 * Manages the environment setup for the application.
 */
class EnvironmentManager {
  /**
   * Gets the appropriate application component based on the environment.
   *
   * @returns The application component to be rendered.
   */
  static get app(): React.FC {
    switch (true) {
      case EnvironmentConstant.isStorybook:
        return StorybookUIRoot;
      case EnvironmentConstant.isLocal:
        return ReactotronManager.setupApp(StorybookUIRoot, App);
      default:
        return App;
    }
  }

  /**
   * Initializes the environment managers.
   */
  static initialize(): void {
    ReactotronManager.initialize();
    SetUpTestManager.initialize();
  }
}

export default EnvironmentManager;
