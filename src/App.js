import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RegitstrationFormComponent from "./Components/RegistrationFormComponent/RegistrationFormComponent";
import AuthorizationFormComponent from "./Components/AuthorizationFormComponent/AuthorizationFormComponent";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/singup">
        <RegitstrationFormComponent />
      </Route>
      <Route path="/singin">
        <AuthorizationFormComponent />
      </Route>
      <Route path="/main">main content</Route>
      <Redirect from="/" to="/singin" />
    </Switch>
  );
};

export default App;
