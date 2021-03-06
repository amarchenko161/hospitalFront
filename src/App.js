import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RegitstrationFormComponent from "./Components/RegistrationFormComponent/RegistrationFormComponent";
import AuthorizationFormComponent from "./Components/AuthorizationFormComponent/AuthorizationFormComponent";
import DoctorsAppointmentComponent from "./Components/DoctorsAppointmentComponent/DoctorsAppointmentComponent";
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
      <Route
        path="/main"
        render={() =>
          localStorage.getItem("token") ? (
            <DoctorsAppointmentComponent />
          ) : (
            <Redirect to="/" />
          )
        }
      ></Route>
      <Redirect from="/" to="/singin" />
    </Switch>
  );
};

export default App;
