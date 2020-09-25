import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class MainContainer extends Component {

    handleClick = () => {
        this.props.history.push("/users/new")
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.handleClick}>SignUp</Button>
                <Button>LogIn</Button>

            </div>
        )
    }
}
