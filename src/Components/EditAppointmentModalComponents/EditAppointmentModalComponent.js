import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import "./EditAppointmentModalComponent.scss";

const EditAppointmentModalComponent = ({
  openEdit,
  setOpenEdit,
  visit,
  setReport,
}) => {
  const { _id, name, doctor, date, complaint } = visit;
  const [field, setField] = useState({
    nameVal: name,
    doctorVal: doctor,
    dateVal: date,
    complaintVal: complaint,
  });

  const { nameVal, doctorVal, dateVal, complaintVal } = field;
  const doctors = [
    "Суровый Эдуард Васильевич",
    "Васильев Антон Эдуардович",
    "Головач Елена Альбертовна",
  ];

  const closeEdit = () => setOpenEdit(false);

  const saveAppointment = async () => {
    await axios
      .patch("http://localhost:8000/updateAppointmen", {
        _id,
        name: nameVal,
        doctor: doctorVal,
        date: dateVal,
        complaint: complaintVal,
      })
      .then((res) => {
        closeEdit();
        setReport(res.data.data);
      });
  };

  return (
    <Dialog
      open={openEdit}
      onClose={closeEdit}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className='edit-modal-style'
    >
      <DialogTitle id="alert-dialog-title">Изменить прием</DialogTitle>
      <DialogContent className='edit-modal-content'>
        <p>Имя:</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue={name || ""}
          onChange={(e) => setField({ ...field, nameVal: e.target.value })}
          className="input-back"
        />
        <p>Врач:</p>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={doctor || ""}
              onChange={(e) =>
                setField({ ...field, doctorVal: e.target.value })
              }
              className="input-back"
            >
              {doctors.map((element, index) => (
                <MenuItem key={`id${index}`} value={element}>
                  {element}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <p>Дата:</p>
        <TextField
          id="date"
          type="date"
          defaultValue={date || ""}
          onChange={(e) => setField({ ...field, dateVal: e.target.value })}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          className="input-back"
        />
        <p>Жалобы:</p>
        <TextField
          id="outlined-basic1"
          multiline
          rows={2}
          rowsMax={4}
          variant="outlined"
          defaultValue={complaint || ""}
          onChange={(e) => setField({ ...field, complaintVal: e.target.value })}
          className="input-back-report"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeEdit}>Cancel</Button>
        <Button onClick={() => saveAppointment()} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
};

export default EditAppointmentModalComponent;
