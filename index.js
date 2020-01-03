/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var firebase = require("firebase");
var config = {
    databaseURL: "https://iitrtimetable-486e3.firebaseio.com",
    projectId: "iitrtimetable-486e3",
};
firebase.initializeApp(config);
AppRegistry.registerComponent(appName, () => App);
