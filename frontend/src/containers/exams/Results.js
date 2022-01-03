import React, { useState } from "react";
import Select from "../../components/selector/Select";
import TextField from "../../components/TextField/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

const semesters = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
];
const courses = [
  "B.tech",
  "M.tech",
  "B.Sc",
  "M.Sc",
  "BCA",
  "MCA",
  "B.Arch",
  "M.arch",
];
export default function Results() {
  const [semester, setSemester] = useState([]);
  const [course, setCourse] = useState([]);

  const handleSemChange = (event) => {
    const {
      target: { value },
    } = event;

    setSemester(typeof value === "string" ? value.split(",") : value);
  };
  const handleCourseChange = (event) => {
    const {
      target: { value },
    } = event;
    setCourse(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-course-label">Course</InputLabel>
          <Select
            labelId="demo-multiple-course-label"
            onChange={handleCourseChange}
            id="demo-multiple-course"
            multiple
            input={<OutlinedInput label="Course" />}
            value={course}
            label="Course"
          >
            {courses.map((cor) => (
              <MenuItem key={cor} value={cor}>
                {cor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-semester-label">Semester</InputLabel>
          <Select
            labelId="demo-multiple-semester-label"
            onChange={handleSemChange}
            label="Semester"
            id="demo-multiple-semester"
            multiple
            input={<OutlinedInput label="Semester" />}
            value={semester}
          >
            {semesters.map((sem) => (
              <MenuItem key={sem} value={sem}>
                {sem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <br />
      <div>
        <TextField name="rollNo" label="RollNo" fullWidth={false} />
      </div>
    </div>
  );
}
