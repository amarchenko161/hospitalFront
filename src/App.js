import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import RegitstrationFormComponent from "./Components/RegistrationFormComponent/RegistrationFormComponent";
import AuthorizationFormComponent from "./Components/AuthorizationFormComponent/AuthorizationFormComponent";
import DoctorsAppointmentComponent from './Components/DoctorsAppointmentComponent/DoctorsAppointmentComponent';
import "./App.css";

const App = () => {

const [report, setReport] = useState([])

useEffect(() => {
  axios.get("http://localhost:8000/allAppointment").then((res) => {
    setReport(res.data.data);
  });
}, []);

  return (
    <Switch>
      <Route path="/singup">
        <RegitstrationFormComponent />
      </Route>
      <Route path="/singin">
        <AuthorizationFormComponent />
      </Route>
      <Route path="/main">
        <DoctorsAppointmentComponent report={report} setReport={setReport}/>  
      </Route>
      <Redirect from="/" to="/singin" />
    </Switch>
  );
};

export default App;
