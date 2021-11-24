import React, { useState } from "react";
import axios from "axios";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import { Link, useHistory } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import logo from "../../source/logoBody.png";
import "./RegistrationFormComponent.scss";

const RegitstrationFormComponent = () => {
  const history = useHistory("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [open, setOpen] = useState({ bol: false, message: "" });
  const { bol, message } = open;

  const checkValidate = async () => {
    const regxplog = /\w{6,}$/;
    const regxppas = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const flaglog = regxplog.test(login);
    const flagpass = regxppas.test(password);

    if (flaglog) {
      if (flagpass) {
        if (password === repeatPassword) {
          try {
            await axios
              .post("http://localhost:8000/createUser", {
                login,
                password,
              })
              .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push("/main");
              });
          } catch {
            setOpen({ bol: true, message: "Пользователь уже есть" });
          }
        } else {
          setOpen({ bol: true, message: "Пароли не совподают" });
        }
      } else {
        setOpen({ bol: true, message: "Неправильно введен пароль" });
      }
    } else {
      setOpen({ bol: true, message: "Неправильно введен логин" });
    }
  };

  return (
    <div className="main-body-style">
      <HeaderFormComponent title="Зарегистрироваться в системе" />
      <div className="body-style">
        <img src={logo} alt="" />
        <div className="form-style">
          <h1> Регистрация </h1>
          <label>Login:</label>
          <input
            type="text"
            value={login}
            name="name"
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
          <label>Repeat password:</label>
          <input
            type="password"
            value={repeatPassword}
            name="name"
            placeholder="Password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="link-style">
            <button onClick={() => checkValidate()}>Зарегистрироваться </button>
            <Link to="/singin">
              <p>Авторизироваться</p>
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

export default RegitstrationFormComponent;
