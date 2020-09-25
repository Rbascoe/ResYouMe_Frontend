import React from 'react';
import './App.css';
import Header from './containers/Header';
import MainContainer from './containers/MainContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserForm from './components/UserForm';

function App() {
  return (
    <BrowserRouter>
    <MainContainer />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/users/new" render={(routerProps) => <UserForm {...routerProps} />}/>
        </Switch>
      </div>
   </BrowserRouter>
  );
}

export default App;
