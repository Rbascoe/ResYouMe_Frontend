import React from 'react';
import './App.css';
import Header from './containers/Header';
import MainContainer from './containers/MainContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';
import Profile from './components/Profile';
// import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import ResumeInfo from './components/ResumeInfo';
import LoginForm from './components/LoginForm';
import LoginInfo from './components/LoginInfo'




export class App extends React.Component {

  state = { user: null }

  setUser = user => {
    this.setState({user: user})
  }

render(){
  return (
    <div className="App">
    <BrowserRouter >
  
    <Header className="header" /> 
      {/* {localStorage.token ? */}
        <Route path="/" render={(routerProps) => <MainContainer className="Nav" {...routerProps} user={this.state.user} setUser={this.setUser} />}/> 
        <Route path="/profile" render={(routerProps) => <Profile {...routerProps} />}/>
        {/* } */}
        <Switch>
          <Route path="/signup" render={(routerProps) => <UserForm {...routerProps} />}/>
          <Route path="/signup" render={(routerProps) => <UserInfo {...routerProps} />}/>

          <Route path="/resume_builder" render={(routerProps) => <ResumeForm {...routerProps} />}/>
          <Route path="/resume_builder" render={(routerProps) => <ResumeInfo {...routerProps} />}/>

          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} />}/>
          <Route path="/login" render={(routerProps) => <LoginInfo {...routerProps} />}/>
        </Switch>
      
   </BrowserRouter>
   </div> 
  );
  }
}

export default App;
