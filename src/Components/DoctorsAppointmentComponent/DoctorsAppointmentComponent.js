import React from "react";
import { Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InputFormAppointmentComponent from "../InputFormAppointmentComponent/InputFormAppointmentComponent";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import "./DoctorsAppointmentComponent.scss";

const DoctorsAppointmentComponent = ({ report, setReport }) => {

  const nametable = ['Имя','Врач','Дата', 'Жалобы']
  return (
    <div>
      <HeaderFormComponent title="Приемы">
        <Button variant="contained">Выйти</Button>
      </HeaderFormComponent>
      <InputFormAppointmentComponent report={report} setReport={setReport} />
      <div className="container-appointment-style">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {
                  nametable.map(element => <TableCell>Имя</TableCell>)
                }
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {report.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.complaint}</TableCell>
                  <TableCell>Кнопки</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DoctorsAppointmentComponent;
