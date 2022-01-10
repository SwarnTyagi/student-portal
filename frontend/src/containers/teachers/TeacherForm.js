import React, { useState, useMemo, useEffect } from "react";
import Form from "../../components/Form/Form";
import TextField from "../../components/TextField/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const DEFAULT_FIELDS = {
  facultyID: "",
  name: "",
  course: "",
  rating: "",
};

export default function TeacherForm(props) {
  const { open, onOk, onCancel, teacher } = props;
  const [state, setState] = useState(DEFAULT_FIELDS);
  const { facultyID, course, name, rating } = state;

  const teacherId = useMemo(() => {
    return teacher._id;
  }, [teacher._id]);

  useEffect(() => {
    if (teacherId) {
      setState(teacher);
    } else {
      setState(DEFAULT_FIELDS);
    }
  }, [teacherId]);
  const onSubmitTeacher = () => {
    onOk && onOk(state);
  };
  const onChange = (name, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log("The name and value is", name, value);
  };
  return (
    <div>
      <Form
        content="This is my content"
        title="Teachers Information"
        okText="Confirm"
        cancelText="Cancel"
        open={open}
        onOk={onSubmitTeacher}
        onCancel={onCancel}
      >
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                name="facultyID"
                onChange={onChange}
                label="Faculty ID"
                value={facultyID}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                onChange={onChange}
                label="Name"
                value={name}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                name="course"
                onChange={onChange}
                label="Course"
                value={course}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="rating"
                onChange={onChange}
                label="Rating"
                value={rating}
              />
            </Grid>
          </Grid>
        </Box>
      </Form>
    </div>
  );
}
