/**
 * @format
 */

import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import App from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => CodePush(App));
