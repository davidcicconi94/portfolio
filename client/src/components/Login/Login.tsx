import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      mail: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={onSubmit}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax", marginBottom: "5px" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              placeholder="Email..."
              type="text"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
            <input
              placeholder="Password..."
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />

            <Button
              variant="contained"
              type="submit"
              style={{ letterSpacing: "5px" }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
