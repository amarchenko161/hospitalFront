import React from 'react';
import './AuthorizationFormComponent.scss'

const AuthorizationFormComponent = () => {
  return (
    <div className='form-style'>
      <h1> Войти в систему </h1> 
      <label>
        Login:
      </label>
      <input type="text" name="name" placeholder='Login' />
      <label>
        Password:
      </label>
      <input type="password" name="name" placeholder='Password' />
     
      <div className='link-style'>
        <button>Войти </button>
        <p>Зарегистрироваться</p>
      </div>
  </div>
  )
}

export default AuthorizationFormComponent