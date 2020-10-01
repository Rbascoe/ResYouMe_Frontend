import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import UserForm from '../components/UserForm';



function MainContainer(props) {

    
    // logout = () => {
    //     localStorage.clear()
    // }

   let handleLogout = e => {
        e.preventDefault();
        props.setUser(null);
        localStorage.clear();
        props.history.push('/')
    }

        return (
            <div>
                <Button onClick={(e) => props.history.push("/signup")}>SignUp</Button>
                {/* {!localStorage.token ? */}
                <Button onClick={(e) => props.history.push("/login")}>LogIn</Button> 
                <Button onClick={handleLogout}>LogOut</Button>
                {/* } */}
            </div>
        )
    
}

export default MainContainer;
