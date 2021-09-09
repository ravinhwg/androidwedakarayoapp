/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Ignore react-query timeout warnings
LogBox.ignoreLogs(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
