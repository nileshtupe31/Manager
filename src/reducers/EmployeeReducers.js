import {
  CREATE_EMPLOYEE,
  EMPLOYEE_SYCED,
  EMPLOYEE_FETCH_SUCCESS
 }
 from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case CREATE_EMPLOYEE:
      return { ...state, [action.payload.prop]: action.payload.value };

    case EMPLOYEE_SYCED:
      return INITIAL_STATE;

    case EMPLOYEE_FETCH_SUCCESS:
      return state;

    default:
    return state;
  }
};
