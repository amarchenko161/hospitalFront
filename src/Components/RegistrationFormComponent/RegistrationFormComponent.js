import React, { useState } from "react";
import "./RegistrationFormComponent.scss";
import logo from "../../source/logoBody.png";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

const RegitstrationFormComponent = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repas, setRepas] = useState('')
  const [open, setOpen] = useState({bol:false, message:''});


  const checkValidate = () => {
    
    const regxplog = /\w{6,}$/;
    const regxppas = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ ;
                     
    const flaglog = regxplog.test(login);
    const flagpass = regxppas.test(password);
    
    if (flaglog) {
      if(flagpass) {
        if (password === repas) {
          console.log(login)
          console.log(password)
          console.log(repas)
        } else {
          setOpen({bol:true, message:'Пароли не совподают'})
        }
      }
      else {
        setOpen({bol:true, message:'Неправильно введен пароль'})
      }

    } else {
     setOpen({bol:true, message:'Неправильно введен логин'})
    }
  }

  return (
    <div className="main-body-style">
      <HeaderFormComponent title='Зарегистрироваться в системе' />
      <div className="body-style">
        <img src={logo} alt="" />
        <div className="form-style">
          <h1> Регистрация </h1>
          <label>Login:</label>
          <input
            type="text"
            name="name"
            placeholder="Login"
            onChange = {(e) => setLogin(e.target.value.trim())}
          />
          <label>Password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <label>Repeat password:</label>
          <input
            type="password"
            name="name"
            placeholder="Password"
            onChange = {(e) => setRepas(e.target.value)}
          />
          <div className="link-style">
            <button onClick = {() => checkValidate()}>Зарегистрироваться </button>
            <Link to="/singin">
              <p>Авторизироваться</p>
            </Link>
          </div>
        </div>
      </div>
      <Snackbar
        open={open.bol}
        autoHideDuration={2000}
        onClose={() => setOpen({bol:false})}
        message={open.message}
      />
    </div>
  );
};

export default RegitstrationFormComponent;
