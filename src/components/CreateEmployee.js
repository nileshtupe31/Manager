import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { createEmployee } from '../actions';

class CreateEmployee extends Component {

  onValueChange(prop) {
    this.props.createEmployee(prop);
  }

  showPickerItems() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const rows = [];
    for (let i = 0; i < days.length; i++) {
      rows.push(<Picker.Item label={days[i]} value={days[i]} key={i} />);
    }
    return rows;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(value) => this.props.createEmployee({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone No."
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={(value) => this.props.createEmployee({ prop: 'phone', value })}

          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}> Shift </Text>
          <Picker
            style={{ flex: 0 }}
            selectedValue={this.props.shift}
            onValueChange={(value) => this.props.createEmployee({ prop: 'shift', value })}
          >
            { this.showPickerItems() }
          </Picker>
        </CardSection>
        <CardSection>
          <Button> Create </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.employee.name,
    phone: state.employee.phone,
    shift: state.employee.shift
  };
};

export default connect(mapStateToProps, { createEmployee })(CreateEmployee);
