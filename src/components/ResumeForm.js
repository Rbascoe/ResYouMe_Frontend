import React, { Component } from 'react';
import ResumeInfo from './ResumeInfo';


export class ResumeForm extends Component {

  state = {
    bio: '',
    experience: '',
    education: '',
    skills: '',
    misc: '',
  };


  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { bio, experience, education, skills,
   misc} = this.state;
    const values = { bio, experience, education, skills,
        misc};

        return (
          <ResumeInfo
            handleChange={this.handleChange}
            values={values}
          />
        );
  }
}
export default ResumeForm;