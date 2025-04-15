import App from 'App';

import StorybookUIRoot from '../../../.storybook.ondevice';

import EnvironmentConstant from '@constants/EnvironmentConstant';
import LoggerManager, { Severity } from '@managers/LoggerManager';
import ReactotronManager from '@managers/ReactotronManager';
import SetUpTestManager from '@managers/SetUpTestManager';

/**
 * Manages the environment setup for the application.
 */
class EnvironmentManager {
  private static get severity(): Severity {
    switch (true) {
      case EnvironmentConstant.isLocal:
        return Severity.verbose;
      case EnvironmentConstant.isTest:
        return Severity.silent;
      case EnvironmentConstant.isStorybook:
        return Severity.silent;
      default:
        return Severity.error;
    }
  }

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
    if (EnvironmentConstant.isLocal) {
      ReactotronManager.initialize();
      SetUpTestManager.initialize();
    }
    LoggerManager.initialize({ severity: this.severity });
  }
}

export default EnvironmentManager;
