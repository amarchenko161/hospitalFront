import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import RegitstrationFormComponent from './Components/RegistrationFormComponent/RegistrationFormComponent';
import AuthorizationFormComponent from './Components/AuthorizationFormComponent/AuthorizationFormComponent';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/singup">
          <RegitstrationFormComponent /> 
        </Route>
        <Route path="/singin">
          <AuthorizationFormComponent /> 
        </Route>
        <Redirect from="/" to="/singin" />
      </Switch>
    </div>
  );
}

export default App;
