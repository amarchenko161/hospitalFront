import React, { useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import InputFormAppointmentComponent from "../InputFormAppointmentComponent/InputFormAppointmentComponent";
import EditAppointmentModalComponent from "../EditAppointmentModalComponents/EditAppointmentModalComponent";
import DeleteAppointmentModalComponent from "../DeleteAppointmentModalComponents/DeleteAppointmentModalComponent";
import "./DoctorsAppointmentComponent.scss";

const DoctorsAppointmentComponent = ({ report, setReport }) => {
  const [openDelet, setOpenDelet] = useState(false);
  const [visit, setVisit] = useState(-1);
  const [openEdit, setOpenEdit] = useState(false);
  const nametable = ["Имя", "Врач", "Дата", "Жалобы"];

  const deleteModal = (index) => {
    setVisit(index);
    setOpenDelet(true);
  };

  const editModal = (index) => {
    setVisit(index);
    setOpenEdit(true);
  };

  const closeModal = () => {
    setOpenDelet(false);
    setVisit(-1);
  };

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
                {nametable.map((element) => (
                  <TableCell key={`key-${element}`}>{element}</TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {report.map((row, index) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.doctor}</TableCell>
                  <TableCell>
                    {row.date.slice(0, 10).split("-").reverse().join(".")}
                  </TableCell>
                  <TableCell>{row.complaint}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => editModal(index)} />
                    <DeleteIcon onClick={() => deleteModal(index)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {openDelet && (
          <DeleteAppointmentModalComponent
            closeModal={closeModal}
            visitId={report[visit]._id}
            setReport={setReport}
          />
        )}
        {openEdit && (
          <EditAppointmentModalComponent
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            visit={report[visit]}
            setReport={setReport}
            report = {report}
          />
        )}
      </div>
    </div>
  );
};

export default DoctorsAppointmentComponent;
