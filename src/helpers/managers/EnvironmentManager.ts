import App from 'App';

import StorybookUIRoot from '../../../.storybook.ondevice';

import EnvironmentConstant from '@constants/EnvironmentConstant';
import ReactotronManager from '@managers/ReactotronManager';

class EnvironmentManager {
  static get app(): React.FC {
    switch (true) {
      case !EnvironmentConstant.isLocal:
        return App;
      case EnvironmentConstant.isStorybook:
        return StorybookUIRoot;
      default:
        return App;
    }
  }

  static initialize(): void {
    ReactotronManager.initialize();
  }
}

export default EnvironmentManager;
