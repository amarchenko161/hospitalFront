import React from 'react';
import logo from '../../source/Vector.png';
import './HeaderFormComponent.scss'

const HeaderFormComponent = ({title}) => {

  return(
      <div className='header'>
        <img src={logo} alt=''/>
        <p>{title}</p>
      </div>
  )

}

export default HeaderFormComponent