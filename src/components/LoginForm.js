import React, { Component } from 'react';
import LoginInfo from './LoginInfo';


export class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { email, password} = this.state;
    const values = { email, password};

        return (
          <LoginInfo
            handleChange={this.handleChange}
            values={values}
          />
        );
  }
}
export default LoginForm;