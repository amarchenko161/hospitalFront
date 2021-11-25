import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HeaderFormComponent from "../HeaderFormComponent/HeaderFormComponent";
import SortAppointmentsComponent from "../SortAppointmentsComponent/SortAppointmentsComponent";
import InputFormAppointmentComponent from "../InputFormAppointmentComponent/InputFormAppointmentComponent";
import EditAppointmentModalComponent from "../EditAppointmentModalComponents/EditAppointmentModalComponent";
import DeleteAppointmentModalComponent from "../DeleteAppointmentModalComponents/DeleteAppointmentModalComponent";
import "./DoctorsAppointmentComponent.scss";

const DoctorsAppointmentComponent = () => {
  const [openDelet, setOpenDelet] = useState(false);
  const [visit, setVisit] = useState(-1);
  const [openEdit, setOpenEdit] = useState(false);
  const [report, setReport] = useState([]);
  const nametable = ["Имя", "Врач", "Дата", "Жалобы"];

  const history = useHistory("");

  useEffect(() => {
    axios
    .get("http://localhost:8000/allAppointment", {
      headers: {
        token: localStorage.getItem("token")
      }
    })
    .then((res) => {
      setReport(res.data.data);
    }).catch(err => history.push("/"));
  }, [history]);

  const deleteModal = (index) => {
    setVisit(index);
    setOpenDelet(true);
  }

  const editModal = (index) => {
    setVisit(index);
    setOpenEdit(true);
  }

  const closeModal = () => {
    setOpenEdit(false);
    setOpenDelet(false);
    setVisit(-1);
  }

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <div>
      <HeaderFormComponent title="Приемы">
        <Button variant="contained" onClick={() => logout()}>
          Выйти
        </Button>
      </HeaderFormComponent>
      <InputFormAppointmentComponent report={report} setReport={setReport} />
      <SortAppointmentsComponent report={report} setReport={setReport}/>
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
            closeModal={closeModal}
            visit={report[visit]}
            setReport={setReport}
          />
        )}
      </div>
    </div>
  );
}

export default DoctorsAppointmentComponent
