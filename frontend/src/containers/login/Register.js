import Form from "../../components/Form/Form";
import TextField from "../../components/TextField/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthService from "../../services/AuthService";
import { setData, getData } from "../../utils/localStorageUtils";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const REGISTER_FIELDS = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const registerService = new AuthService();

export default function Register(props) {
  const { onRegister, onCancel, open = true } = props;
  const [state, setState] = useState(REGISTER_FIELDS);
  const { username, firstname, lastname, email, password } = state;
  const navigate = useNavigate();

  const onRegisteration = () => {
    registerService.register(state).then(() => {
      navigate("/login");
    });
  };
  const onChange = (name, value) => {
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <div>
        <h1>USER REGISTRATION</h1>
      </div>
      <div>
        <Form
          content="This is my content"
          title="Register Information"
          okText="Register"
          cancelText="Cancel"
          open={open}
          onOk={onRegisteration}
          onCancel={onCancel}
          withModal={false}
        >
          {" "}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="username"
                  onChange={onChange}
                  label="User Name"
                  value={username}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="firstname"
                  onChange={onChange}
                  label="First Name"
                  value={firstname}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="lastname"
                  onChange={onChange}
                  label="Last Name"
                  value={lastname}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="email"
                  onChange={onChange}
                  label="Email"
                  value={email}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="password"
                  onChange={onChange}
                  label="Password"
                  value={password}
                />
              </Grid>
            </Grid>
          </Box>
        </Form>
        <Link to="/login">Already a User? Log in</Link>
      </div>
    </div>
  );
}
