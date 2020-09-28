import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import UserForm from '../components/UserForm';

export default class MainContainer extends Component {

    // handleClick = (e) => {
    //     this.props.history.push("/signup")
    //     console.log("clicked")
    // }

    render() {
        return (
            <div>
                <Button onClick={(e) => this.props.history.push("/signup")}>SignUp</Button>
                <Button>LogIn</Button>

            </div>
        )
    }
}
