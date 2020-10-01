import React, { Component } from 'react'


export default class Resume extends Component {

    state = {
        user_id: null,
        bio: '',
        experience: '',
        education: '',
        skills: '',
        misc: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/resumes')
        .then(res => res.json())
        .then(resumes => resumes.map(resume =>
            this.setState({
                user_id: resume.user_id,
                bio: resume.bio,
                experience: resume.experience,
                education: resume.education,
                skills: resume.skills,
                misc: resume.misc
            })))
    }

    render(){
        return (
            <div>
                <div>
                {/* resume info */}
                <h3>Bio:</h3>
                {this.state.bio}
                <h3>Experience:</h3>
                {this.state.experience}
                <h3>Education:</h3>
                {this.state.education}
                <h3>Skills:</h3>
                {this.state.skills}
                <h3>Miscellaneous:</h3>
                {this.state.skills}
                </div>
            </div>
        )
    }
}



