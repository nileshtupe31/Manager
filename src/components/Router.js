import React from 'react';
import { Router, Scence, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';

const RouterComponent = () => {
    return (
      <Router>
        <Scence key="root" hideNavBar >
          <Scence key="login" initial>
            <Scence key="login" component={LoginForm} title="Log In" />
          </Scence>
          <Scence key="main" >
            <Scence
              key="employeeList"
              component={EmployeeList}
              title="Employee List"
              rightTitle="Add"
              onRight={() => { Actions.createEmployee(); }}
            />
            <Scence
              key="createEmployee"
              component={CreateEmployee}
              title="Add Employee"
              backTitle=' '
            />
          </Scence>
        </Scence>
      </Router>
    );
};

export default RouterComponent;
