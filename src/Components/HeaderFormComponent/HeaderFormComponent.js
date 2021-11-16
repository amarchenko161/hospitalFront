import React from 'react';
import logo from '../../source/Vector.png';
import './HeaderFormComponent.scss'

const HeaderFormComponent = () => {

  return(
      <div className='header'>
        <img src={logo} alt=''/>
        <p>Зарегистрироваться в системе</p>
      </div>
  )

}

export default HeaderFormComponent