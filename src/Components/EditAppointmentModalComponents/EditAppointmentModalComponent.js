import React, { useState } from "react";
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

const EditAppointmentModalComponent = ({
  openEdit,
  setOpenEdit,
  visit,
  setReport,
  report,
}) => {
  const { name, doctor, date, complaint } = visit;

  console.log(name);

  const doctors = [
    "Суровый Эдуард Васильевич",
    "Васильев Антон Эдуардович",
    "Головач Елена Альбертовна",
  ];

  const closeEdit = () => setOpenEdit(false);

  return (
    <Dialog
      open={openEdit}
      onClose={closeEdit}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Изменить прием</DialogTitle>
      <DialogContent>
        <p>Имя:</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={name || ""}
          onChange={(e) => setReport({ ...report, name: e.target.value })}
          className="input-back"
        />

        <p>Врач:</p>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={doctor || ""}
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
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          className="input-back"
        />

        <p>Жалобы:</p>
        <TextField
          id="outlined-basic1"
          variant="outlined"
          value={complaint || ""}
          className="input-back"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeEdit}>Cancel</Button>
        <Button onClick={closeEdit} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAppointmentModalComponent;
