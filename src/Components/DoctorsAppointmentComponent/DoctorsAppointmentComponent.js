import React from "react";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import { Button } from "@mui/material";
import InputFormAppointmentComponent from "../InputFormAppointmentComponent/InputFormAppointmentComponent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./DoctorsAppointmentComponent.scss";
const DoctorsAppointmentComponent = ({ report, setReport }) => {
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
                <TableCell>Имя</TableCell>
                <TableCell>Врач</TableCell>
                <TableCell>Дата</TableCell>
                <TableCell>Жалобы</TableCell>
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
