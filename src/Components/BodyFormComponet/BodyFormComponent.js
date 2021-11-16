import React from 'react';
import HeaderFormComponent from '../HeaderFormComponent/HeaderFormComponent';
import RegistrationFormComponent from '../RegistrationFormComponent/RegistrationFormComponent';
import logo from '../../source/logoBody.png'
import './BodyFormComponent.scss'


const BodyFormComponents = () => {
  return (
    <div className='main-body-style'>
      <HeaderFormComponent/>
      <div className='body-style'>
        <img src={logo} alt=''/>
        <RegistrationFormComponent/>
      </div>
    </div>
  )
}

export default BodyFormComponents