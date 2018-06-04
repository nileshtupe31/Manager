/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/components/Router';

export default class App extends Component {

  componentWillMount() {
    console.disableYellowBox = true;

    const config = {
      apiKey: 'AIzaSyCVl4RZsB5mIsVyYhNqetlK9JLbmy5A7Sk',
      authDomain: 'manager-50958.firebaseapp.com',
      databaseURL: 'https://manager-50958.firebaseio.com',
      projectId: 'manager-50958',
      storageBucket: 'manager-50958.appspot.com',
      messagingSenderId: '481883539625'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
