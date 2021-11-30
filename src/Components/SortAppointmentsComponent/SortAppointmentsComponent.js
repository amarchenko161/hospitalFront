import React, { useState } from "react";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
import "./SortAppointmentsComponent.scss";

const SortAppointmentsComponent = ({ report, setReport }) => {
  const [sortAppoint, setSortAppoint] = useState({
    sortVal: "",
    sortType: "asc",
  });

  const { sortVal, sortType } = sortAppoint;

  const sortValue = [
    {
      label: "Имя",
      value: "name",
    },
    {
      label: "Доктор",
      value: "doctor",
    },
    {
      value: "date",
      label: "Дата",
    },
    {
      label: "None",
      value: "_id",
    },
  ];

  const sortTypes = [
    {
      value: "asc",
      label: "По возрастанию",
    },
    {
      value: "desc",
      label: "По убыванию",
    },
  ];

  const handleChange = (e, key) => {
    setSortAppoint({ ...sortAppoint, [key]: e.target.value });
    key === "sortVal"
      ? sortAppointments(e.target.value, sortType)
      : sortAppointments(sortVal, e.target.value);
  }

  const sortAppointments = (field, direction) => {
    if (field === 'None') field = '_id';
    report.sort((a, b) => a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0);
    if (direction === "asc") report.reverse();
    setReport([...report]);
  }

  return (
    <div className="sort-style">
      <div className="sort-component">
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortVal}
              onChange={(e) => handleChange(e, "sortVal")}
              className='input-space'
            >
              {sortValue.map((element, index) => (
                <MenuItem key={`id${index}`} value={element.value}>
                  {element.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      {sortVal && sortVal !== "_id" ? (
        <div className="sort-component-type">
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortType}
                onChange={(e) => handleChange(e, "sortType")}
                className='input-space'
              >
                {sortTypes.map((element, index) => (
                  <MenuItem key={`id${index}`} value={element.value}>
                    {element.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SortAppointmentsComponent;
