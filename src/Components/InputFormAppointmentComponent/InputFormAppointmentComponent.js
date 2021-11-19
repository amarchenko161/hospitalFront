import React, { useState } from "react";
import axios from "axios";
import { TextField, Autocomplete, Button } from "@mui/material";
import "./InputFormAppointmentComponent.scss";

const InputFormAppointmentComponent = ({ report, setReport }) => {
  const [field, setField] = useState({
    name: "",
    date: "",
    complaint: "",
  });

  const { name, date, complaint } = field;

  const doctors = [
    { label: "Суровый Эдуард Васильевич" },
    { label: "Васильев Антон Эдуардович" },
    { label: "Головач Елена Альбертовна" },
  ];

  const [doctor, setDoctor] = useState("");
  const [doctorVal, setDoctorVal] = useState(doctors[0]);

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
        setField({ name: "", date: "", complaint: "" });
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
        />
      </div>
      <div>
        <p>Врач:</p>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={doctors}
          value={doctor}
          onChange={(event, newValue) => {
            setDoctorVal(newValue);
          }}
          sx={{ width: 300 }}
          onInputChange={(event, newValue) => {
            setDoctor(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
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
        />
      </div>
      <div>
        <p>Жалобы:</p>
        <TextField
          id="outlined-basic1"
          variant="outlined"
          value={complaint || ""}
          onChange={(e) => setField({ ...field, complaint: e.target.value })}
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
