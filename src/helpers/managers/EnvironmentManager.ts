import App from 'App';

import StorybookUIRoot from '../../../.storybook.ondevice';

import EnvironmentConstant from '@constants/EnvironmentConstant';

class EnvironmentManager {
  static get App(): React.FC {
    switch (true) {
      case !EnvironmentConstant.isLocal:
        return App;
      case EnvironmentConstant.isStorybook:
        return StorybookUIRoot;
      default:
        return App;
    }
  }
}

export default EnvironmentManager;
