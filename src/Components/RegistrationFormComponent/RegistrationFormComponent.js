import React from 'react';
import './RegistrationFormComponent.scss'

const RegitstrationFormComponent = () => {
  return (
    <div className='form-style'>
      <h1> Регистрация </h1> 
      <label>
        Login:
      </label>
      <input type="text" name="name" placeholder='Login' />
      <label>
        Password:
      </label>
      <input type="password" name="name" placeholder='Password' />
      <label>
        Repeat password:
      </label>
      <input type="password" name="name" placeholder='Password' />
      <div className='link-style'>
        <button>Зарегистрироваться </button>
        <p>Авторизироваться</p>
      </div>
  </div>
  )
}

export default RegitstrationFormComponent