import React from 'react';
import Button from '@material-ui/core/Button';



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
            <div style={{opacity: 1.0}}>
                <Button onClick={() => props.history.push("/signup")}>SignUp</Button>
                {!localStorage.token ?
                <Button onClick={() => props.history.push("/login")}>LogIn</Button> :
                <Button onClick={handleLogout}>LogOut</Button>
                }
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{
                    fontSize: '60px',
                    color: 'gold', 
                    outline: '5px', 
                    outlineColor: 'black' }}>Build Your Resume Today!</h1>
            </div>
        )
    
}

export default MainContainer;
