import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import "./InputFormAppointmentComponent.scss";

const InputFormAppointmentComponent = ({ report, setReport }) => {
  const [field, setField] = useState({
    name: "",
    doctor: "",
    date: "",
    complaint: "",
  });
  const { name, doctor, date, complaint } = field;

  const doctors = [
    "Суровый Эдуард Васильевич",
    "Васильев Антон Эдуардович",
    "Головач Елена Альбертовна",
  ];

  const addAppointment = async () => {
    await axios
      .post(
        "http://localhost:8000/createAppointment",
        {
          name,
          doctor,
          date,
          complaint,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        report.push(res.data.data);
        setReport([...report]);
        setField({ name: "", doctor: "", date: "", complaint: "" });
      });
  };

  return (
    <div className="form-container">
      <div>
        <p>Имя:</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={name || ""}
          onChange={(e) => setField({ ...field, name: e.target.value })}
          className="input-back"
        />
      </div>
      <div>
        <p>Врач:</p>
        <Box sx={{ minWidth: 300 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={doctor || ""}
              className="input-back"
              onChange={(e) => setField({ ...field, doctor: e.target.value })}
            >
              {doctors.map((element, index) => (
                <MenuItem key={`id${index}`} value={element}>
                  {element}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <p>Дата:</p>
        <TextField
          id="date"
          type="date"
          defaultValue={date || ""}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setField({ ...field, date: e.target.value })}
          className="input-back"
        />
      </div>
      <div>
        <p>Жалобы:</p>
        <TextField
          id="outlined-basic1"
          variant="outlined"
          value={complaint || ""}
          onChange={(e) => setField({ ...field, complaint: e.target.value })}
          className="input-back"
        />
      </div>
      <div className="center-button">
        <Button
          variant="outlined"
          disabled={!(name && date && complaint && doctor) ? false : true}
          onClick={() => addAppointment()}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default InputFormAppointmentComponent;
