import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TextField, Autocomplete } from "@mui/material";

const EditAppointmentModalComponent = ({
  openEdit,
  setOpenEdit,
  report,
  setReport,
}) => {
  const doctors = [
    { label: "Суровый Эдуард Васильевич" },
    { label: "Васильев Антон Эдуардович" },
    { label: "Головач Елена Альбертовна" },
  ];

  const closeEdit = () => setOpenEdit(false);

  return (
    <div>
      <Dialog
        open={openEdit}
        onClose={closeEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p> Изменить прием </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <p>Имя:</p>
              <TextField id="outlined-basic" variant="outlined" />
            </div>
            <div>
              <p>Врач:</p>
              {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={doctors}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
            </div>
            <div>
              <p>Дата:</p>
              <TextField
                id="date"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <p>Жалобы:</p>
              <TextField id="outlined-basic1" variant="outlined" />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEdit}>Cancel</Button>
          <Button onClick={closeEdit} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditAppointmentModalComponent;
