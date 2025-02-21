import App from 'App';

import StorybookUIRoot from '../../../.storybook.ondevice';

import EnvironmentConstant from '@constants/EnvironmentConstant';
import ReactotronManager from '@managers/ReactotronManager';

class EnvironmentManager {
  static get app(): React.FC {
    switch (true) {
      case EnvironmentConstant.isStorybook:
        return StorybookUIRoot;
      case EnvironmentConstant.isLocal:
        return ReactotronManager.setupApp(App);
      default:
        return App;
    }
  }

  static initialize(): void {
    ReactotronManager.initialize();
  }
}

export default EnvironmentManager;
