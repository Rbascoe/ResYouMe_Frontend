import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field';
import Button from '@material-ui/core/Button';
import { Route, withRouter } from 'react-router-dom';



class LoginInfo extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.history.push("/profile")
  }

  login = (e) => {
    e.preventDefault()

    const {values} = this.props;

    fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        
            email: values.email,
            password: values.password,
            
        })
      })
    .then(res => res.json())
    .then(userInfo => {
      localStorage.token = userInfo.token
    })
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>  

        <Dialog open fullWidth maxWidth='sm'>
            <form onSubmit={(e) => {
              this.login(e) 
              this.handleSubmit()
            }}>

            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              // onChange={(e) => this.handleChange(e)}
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <PasswordField
              placeholder="Enter Your Password"
              label="Password"
              // onChange={(e) => this.handleChange(e)}
              onChange={handleChange('password')}
              defaultValue={values.password}
              margin="normal"
              fullWidth
            />
            <br />
            <br />
            <Button type="submit"
            variant="contained"
            color="primary">
              LogIn
            </Button>
            </form>
        </Dialog>

      </div>
    );
  }
}

export default withRouter(LoginInfo);