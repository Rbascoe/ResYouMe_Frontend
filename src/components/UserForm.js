import React, { Component } from 'react';
import UserInfo from './UserInfo';
// import FormPersonalDetails from './FormPersonalDetails';
// import Confirm from './Confirm';
// import Success from './Success';

export class UserForm extends Component {

  state = {
    first_name: '',
    last_name: '',
    address: '',
    phone_number: '',
    email: '',
    password: '',
  };


  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { first_name, last_name, address, phone_number,
    email, password} = this.state;
    const values = { first_name, last_name, address, phone_number,
        email, password};

        return (
          <UserInfo
            handleChange={this.handleChange}
            values={values}
          />
        );
  }
}
export default UserForm;