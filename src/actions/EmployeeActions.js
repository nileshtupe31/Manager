import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { CREATE_EMPLOYEE,
  EMPLOYEE_SYCED,
  EMPLOYEE_FETCH_SUCCESS
} from './types';

export const createEmployee = ({ prop, value }) => {
  return {
      type: CREATE_EMPLOYEE,
      payload: { prop, value }
  };
};

export const syncEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SYCED });
      Actions.pop();
    });
  };
};

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({
        type: EMPLOYEE_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};
