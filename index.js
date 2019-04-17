/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
//import App from './app/App';
import App from './src/app';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import reducer from './src/reducers/counter';

const store = createStore(reducer);

const AppContainer =() =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
