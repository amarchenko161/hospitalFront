import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteAppointmentModalComponent = ({
  openDelet,
  closeModal,
  visitId,
  setReport,
}) => {
  const deleteAppointment = async () => {
    await axios
      .delete(`http://localhost:8000/deleteAppointment?_id=${visitId}`)
      .then((res) => {
        closeModal();
        setReport(res.data.data);
      });
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Удалить прием</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить прием ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeModal()}>Cancel</Button>
          <Button onClick={() => deleteAppointment()} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteAppointmentModalComponent;
