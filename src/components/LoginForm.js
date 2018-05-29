import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged,
          passwordChanged,
          loginUser
      } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonTap() {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }

  showError() {
      if (this.props.error !== null) {
        return (
          <Text style={styles.errorTextStyle}>
            {this.props.error.message}
          </Text>
        );
      }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
      return (
        <Button onPress={this.onLoginButtonTap.bind(this)}>
         LogIn
        </Button>
      );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="email@gmail.com"
            label="Email ID:"
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            onChangeText={this.onPasswordChange.bind(this)}
            placeholder="Password"
            label="Password"
            value={this.props.password}
            secureTextEntry
          />
        </CardSection>

        <View>
          {this.showError()}
        </View>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, { emailChanged,
          passwordChanged,
          loginUser
      })(LoginForm);
