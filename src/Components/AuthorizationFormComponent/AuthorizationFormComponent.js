import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import Snackbar from "@mui/material/Snackbar";
import logo from "../../source/logoBody.png";
import "./AuthorizationFormComponent.scss";

const AuthorizationFormComponent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState({ bol: false, message: "" });
  const { bol, message } = open;
  const history = useHistory("");

  const checkValidate = async () => {
    const regxplog = /\w{6,}$/;
    const regxppas = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const flaglog = regxplog.test(login);
    const flagpass = regxppas.test(password);

    if (flaglog) {
      if (flagpass) {
        try {
          await axios
            .post("http://localhost:8000/singin", {
              login,
              password,
            })
            .then((res) => {
              localStorage.setItem('token', res.data)
              history.push("/main");
            });
        } catch {
          setOpen({
            bol: true,
            message: "Ошибка входа. Проверьте данные еще раз",
          });
        }
      }
    }
  };

  return (
    <div className="main-body-style">
      <HeaderFormComponent title="Войти в систему" />
      <div className="body-style">
        <img src={logo} alt="" />
        <div className="form-style">
          <h1> Войти в систему </h1>
          <label>Login:</label>
          <input
            type="text"
            name="name"
            value={login}
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value.trim())}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            name="name"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="link-style">
            <button onClick={() => checkValidate()}>Войти </button>
            <Link to="/singup" className="link-text">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
      <Snackbar
        open={bol}
        autoHideDuration={2000}
        onClose={() => setOpen({ bol: false })}
        message={message}
      />
    </div>
  );
};

export default AuthorizationFormComponent;
