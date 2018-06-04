import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';


class EmployeeList extends Component {

  componentWillMount() {
    debugger;
    this.props.fetchEmployees();
  }

  render() {
    return (
      <View styles={{ flex: 1 }}>
        <Text> Employee List </Text>
        <Text> Employee List </Text>
        <Text> Employee List </Text>

      </View>
    );
  }
}

export default connect(null, { fetchEmployees })(EmployeeList);
