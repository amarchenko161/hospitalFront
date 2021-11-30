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
    date: new Date(),
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
        setField({ name: "", doctor: "", date: new Date(), complaint: "" });
      });
  };

  return (
    <div className="form-container">
      <div className='input-styles'>
        <p>Имя:</p>
        <TextField fullWidth
          id="outlined-basic"
          variant="outlined"
          value={name || ""}
          onChange={(e) => setField({ ...field, name: e.target.value })}
          className="input-back"
        />
      </div>
      <div className='input-styles'>
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
      <div className='input-styles'>
        <p>Дата:</p>
        <TextField fullWidth
          id="date"
          type="date"
          value={date || new Date()}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setField({ ...field, date: e.target.value })}
          className="input-back"
        />
      </div>
      <div className='input-styles'>
        <p>Жалобы:</p>
        <TextField fullWidth
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
          disabled={!(name && date && complaint && doctor)}
          onClick={() => addAppointment()}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default InputFormAppointmentComponent;
