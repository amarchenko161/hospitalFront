import React from "react";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import { Link } from "react-router-dom";
import logo from "../../source/logoBody.png";
import "./AuthorizationFormComponent.scss";

const AuthorizationFormComponent = () => {
  return (
    <div className="main-body-style">
      <HeaderFormComponent title="Войти в систему" />
      <div className="body-style">
        <img src={logo} alt="" />
        <div className="form-style">
          <h1> Войти в систему </h1>
          <label>Login:</label>
          <input type="text" name="name" placeholder="Login" />
          <label>Password:</label>
          <input type="password" name="name" placeholder="Password" />

          <div className="link-style">
            <button>Войти </button>
            <Link to="/singup" className="link-text">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizationFormComponent;
