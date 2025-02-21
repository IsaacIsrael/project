import App from 'App';

import StorybookUIRoot from '../../../.storybook.ondevice';

import EnvironmentConstant from '@constants/EnvironmentConstant';
import ReactotronManager from '@managers/ReactotronManager';
import SetUpTestManager from '@managers/SetUpTestManager';

class EnvironmentManager {
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

  static initialize(): void {
    ReactotronManager.initialize();
    SetUpTestManager.initialize();
  }
}

export default EnvironmentManager;
