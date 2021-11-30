import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import "./FilterAppointmentComponent.scss";

const FilterAppointmentComponent = ({ report, setReport, setOpenFilter }) => {
  const [date, setDate] = useState({
    firstDate: "",
    secondDate: "",
  });
  const [newReport, setNewReport] = useState([...report]);

  const { firstDate, secondDate } = date;

  const handleChange = (e, key) => {
    setDate({ ...date, [key]: e.target.value });
  };

  const resetState = () => {
    resetReport();
    setOpenFilter(0);
  };

  const resetReport = () => {
    axios
      .get("http://localhost:8000/allAppointment", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setReport(res.data.data);
      });
  };

  const filterApointments = () => {
    switch (firstDate || secondDate) {
      case firstDate:
        setReport([
          ...newReport.filter((element) => element.date >= firstDate),
        ]);
        break;
      case secondDate:
        setReport([
          ...newReport.filter((element) => element.date <= secondDate),
        ]);
        break;

      case firstDate && secondDate:
        setReport([
          ...newReport.filter(
            (element) => element.date >= firstDate && element.date <= secondDate
          ),
        ]);
        break;

      default:
        resetReport();
    }
  };

  return (
    <div className="filter-style">
      <div className="date-filter">
        <p>C: </p>
        <TextField
          id="date"
          type="date"
          defaultValue={firstDate}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange(e, "firstDate")}
          className="input-back"
        />
      </div>
      <div className="date-filter">
        <p>По: </p>
        <TextField
          id="date1"
          type="date"
          defaultValue={secondDate}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange(e, "secondDate")}
          className="input-back"
        />
      </div>
      <div className='active-link'>
        <button className='filter-button' onClick={() => filterApointments()}>Фильтрация</button>
        <DeleteIcon className='active-icon' onClick={() => resetState()} />
      </div>
    </div>
  );
};

export default FilterAppointmentComponent;
