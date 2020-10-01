import React, { Component } from 'react'
import Resume from './Resume';

export default class Profile extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        phone_number: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(users => users.map(user =>
            this.setState({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                address: user.address,
                phone_number: user.phone_number
            })))
    }
    render() {
        return (
            <div>
                {/* Some user info */}
                <h2>{this.state.first_name.toUpperCase()} {this.state.last_name.toUpperCase()}</h2>
                
                <Resume />
            </div>
        )
    }
}
