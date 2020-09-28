import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom'
import { Link }  from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class UserInfo extends Component {
 
  // submit = e => {
  //   e.preventDefault();
  //   this.props.history.push("/profile")
  //
  signUp = (e) => {
    e.preventDefault()

    const {values} = this.props;

    fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        //    user:{
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            address: values.address,
            phone_number: values.phone_number,
            
        //    }
        })
    })
    .then(res => res.json())
    .then(console.log)
}


  

  render() {
    const { values, handleChange } = this.props;
    return (
    //   <MuiThemeProvider>
        <>
          {/* <Dialog 
            open
            fullWidth
            maxWidth='sm'
          > */}
            <form onSubmit={(e) =>  this.signUp(e) }>
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
            <Button type="submit"
            // component={ Link } 
            // to="/profile"
            variant="contained"
            color="primary">
              SignUp
            </Button>
            </form>
          {/* </Dialog> */}
        </>
       /* </MuiThemeProvider> */
    );
  }
}

export default UserInfo;