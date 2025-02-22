/* eslint-disable no-undef */
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import EnvironmentManager from '@managers/EnvironmentManager';

EnvironmentManager.initialize();
AppRegistry.registerComponent(appName, () => EnvironmentManager.app);
