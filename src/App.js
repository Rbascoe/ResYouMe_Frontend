import React from 'react';
import './App.css';
import Header from './containers/Header';
import MainContainer from './containers/MainContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';
import Profile from './components/Profile';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import ResumeInfo from './components/ResumeInfo';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route path="/" render={(routerProps) => <MainContainer {...routerProps} />}/>
        <Header />
        <Switch>
          <Route path="/signup" render={(routerProps) => <UserForm {...routerProps} />}/>
          <Route path="/signup" render={(routerProps) => <UserInfo {...routerProps} />}/>

          <Route path="/resume_builder" render={(routerProps) => <ResumeForm {...routerProps} />}/>
          <Route path="/resume_builder" render={(routerProps) => <ResumeInfo {...routerProps} />}/>
        </Switch>
        <Route path="/profile" render={(routerProps) => <Profile {...routerProps} />}/>
      </div>
   </BrowserRouter>
  );
}

export default App;
