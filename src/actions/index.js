import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
   EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,
   LOGIN_USER_FAILURE, USER_LOGGING_IN
 } from './types';

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  };
};

export const passwordChanged = (text) => {
  return {
      type: PASSWORD_CHANGED,
      payload: text
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGGING_IN
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => onLoginSuccess(user, dispatch))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(user, dispatch))
      .catch((error) => onLoginFailure(dispatch, error));
    });
  };
};

const onLoginFailure = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILURE,
    payload: error
  });
};

const onLoginSuccess = (user, dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
