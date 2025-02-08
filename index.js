import { AppRegistry } from 'react-native';

// import App from './src/App';
import StorybookUIRoot from './.storybook.ondevice';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
