import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';



export class ResumeInfo extends Component {
 
  // submit = e => {
  //   e.preventDefault();
  //   this.props.history.push("/profile")
  //
  createResume = (e) => {
    e.preventDefault()

    const {values} = this.props;

    fetch("http://localhost:3000/api/v1/resumes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            bio: values.bio,
            experience: values.experience,
            education: values.education,
            skills: values.skills,
            misc: values.misc,
        
        })
    })
    .then(res => res.json())
    .then(console.log)
}

  handleSubmit = () => {
    // console.log(this.props)
    this.props.history.push("/profile")
  }
  

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
            <form onSubmit={(e) =>  {
              this.createResume(e)
              this.handleSubmit()
              }
             }>
            <TextField
              placeholder="Enter A Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Experience"
              label="Experience"
              onChange={handleChange('experience')}
              defaultValue={values.experience}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Education"
              label="Education"
              onChange={handleChange('education')}
              defaultValue={values.education}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Skills"
              label="Skills"
              onChange={handleChange('skills')}
              defaultValue={values.skills}
              margin="normal"
              fullWidth
            />
             <br />
            <TextField
              placeholder="Miscellaneous"
              label="Miscellaneous"
              onChange={handleChange('misc')}
              defaultValue={values.misc}
              margin="normal"
              fullWidth
            />
            <br />
            <Button type="submit"
            // component={ Link } 
            // to="/profile"
            variant="contained"
            color="primary">
              Build Resume
            </Button>
            </form>
          </Dialog>
        </>
       /* </MuiThemeProvider> */
    );
  }
}

export default withRouter(ResumeInfo);