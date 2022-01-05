import React, { useState } from "react";
import LoginCard from "../../components/LoginBox/LoginCard";
import Form from "../../components/Form/Form";
import TextField from "../../components/TextField/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthService from "../../services/AuthService";
import { setData } from "../../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";

const loginService = new AuthService();

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onChangeUserName = (u, v) => {
    setUserName(v);
  };
  const onChangePassword = (u, v) => {
    setPassword(v);
  };

  const onSubmitLogin = () => {
    loginService.login({ username: userName, password }).then((res) => {
      const { data } = res.data;
      const { token, userDetails } = data;
      setData("token", token);
      setData("userDetails", JSON.stringify(userDetails));
      navigate("/teachers");
    });
  };
  return (
    <div>
      <h2>Login </h2>

      <LoginCard />
      <Form okText="Confirm" onOk={onSubmitLogin} withModal={false}>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                name="username"
                onChange={onChangeUserName}
                label="User Name"
                value={userName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                onChange={onChangePassword}
                label="Password"
                value={password}
              />
            </Grid>
          </Grid>
        </Box>
      </Form>
    </div>
  );
};

export default Login;
