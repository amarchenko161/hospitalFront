import React, { useState } from "react";
import axios from "axios";
import { TextField, Autocomplete, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
      .post("http://localhost:8000/createAppointment", {
        name,
        doctor,
        date,
        complaint,
      })
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
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
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
          disabled={name && date && complaint && doctor ? false : true}
          onClick={() => addAppointment()}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default InputFormAppointmentComponent;
