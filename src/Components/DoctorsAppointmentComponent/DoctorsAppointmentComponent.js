import React from "react";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import { Button } from '@mui/material';
import InputFormAppointmentComponent from '../InputFormAppointmentComponent/InputFormAppointmentComponent';

const DoctorsAppointmentComponent = () => {
  return (
    <div>
      <HeaderFormComponent title="Приемы">
        <Button variant="contained">Выйти</Button>
      </HeaderFormComponent> 
      <InputFormAppointmentComponent/>
    </div>
  )
}

export default DoctorsAppointmentComponent