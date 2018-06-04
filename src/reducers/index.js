import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import EmployeeReducers from './EmployeeReducers';

export default combineReducers({
    auth: AuthReducers,
    employee: EmployeeReducers
});
