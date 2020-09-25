import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class UserInfo extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

  render() {
    const { values, handleChange } = this.props;
    return (
    //   <MuiThemeProvider>
        <>
          <Dialog 
            open
            fullWidth
            maxWidth='sm'
          >
        
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('first_name')}
              defaultValue={values.first_name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('last_name')}
              defaultValue={values.last_name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
             <br />
            <TextField
              placeholder="Enter Your Password"
              label="Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
              margin="normal"
              fullWidth
            />
             <br />
            <TextField
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
             <br />
            <TextField
              placeholder="Enter Your Phone Number"
              label="Phone Number"
              onChange={handleChange('phone_number')}
              defaultValue={values.phone_number}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
            //   onClick={this.continue}
            >Submit</Button>
          </Dialog>
        </>
       /* </MuiThemeProvider> */
    );
  }
}

export default UserInfo;