import React, { useState } from "react";
import Form from "../../components/Form/Form";
import TextField from "../../components/TextField/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const DEFAULT_FIELDS = {
  name: "",
  age: "",
  course: "",
};

export default function StudentForm(props) {
  const { open, onOk, onCancel } = props;
  const [state, setState] = useState(DEFAULT_FIELDS);
  const { name, age, course } = state;
  const onSubmitStudent = () => {
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
        title="Students Information"
        okText="Confirm"
        cancelText="Cancel"
        open={open}
        onOk={onSubmitStudent}
        onCancel={onCancel}
      >
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                onChange={onChange}
                label="Name"
                value={name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="age"
                onChange={onChange}
                label="Age"
                value={age}
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
          </Grid>
        </Box>
      </Form>
    </div>
  );
}
