import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class CreateEmployee extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone No."
            placeholder="555-555-555"
          />
        </CardSection>

        <CardSection>
          <Button> Create </Button>
        </CardSection>
      </Card>
    );
  }
}

export default CreateEmployee;
