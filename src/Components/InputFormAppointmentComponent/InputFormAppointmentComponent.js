import React, { useState } from "react";
import { TextField, Autocomplete, Button } from "@mui/material";
import "./InputFormAppointmentComponent.scss";

const InputFormAppointmentComponent = () => {
  const [field, setField] = useState({
    name: "",
    date: "",
    complaint: "",
  });

  const { name, date, complaint } = field;

  console.log(field);

  const doctors = [
    { label: "Суровый Эдуард Васильевич" },
    { label: "Васильев Антон Эдуардович" },
    { label: "Головач Елена Альбертовна" },
  ];

  const [doctor, setDoctor] = useState(doctors[0]);

  return (
    <div className="form-container">
      <div>
        <p>Имя:</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={name || ""}
          onChange={(e) => setField({ name: e.target.value })}
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
            setDoctor(newValue);
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
          onChange={(e) => setField({ date: e.target.value })}
        />
      </div>
      <div>
        <p>Жалобы:</p>
        <TextField
          id="outlined-basic1"
          variant="outlined"
          value={complaint || ""}
          onChange={(e) => setField({ complaint: e.target.value })}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          disabled={name && date && complaint && doctor ? false : true}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default InputFormAppointmentComponent;
