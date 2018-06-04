import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import EmployeeReducers from './EmployeeReducers';
import EmployeeListReducers from './EmployeeListReducers';

export default combineReducers({
    auth: AuthReducers,
    employee: EmployeeReducers,
    employees: EmployeeListReducers
});
