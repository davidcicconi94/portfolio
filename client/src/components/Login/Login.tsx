import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../slices/authSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading, message, error } = useAppSelector(
    (state) => state.auth
  );

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (error) {
      console.log("NO:", message);
    }
    if (message && error) {
      console.log("SI", message);
    }
  }, [isAuthenticated, error, message]);

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

          {!isAuthenticated ? (
            <div>
              <input
                placeholder="Email..."
                type="text"
                name="email"
                value={email}
                onChange={onChangeEmail}
                required
              />
              <input
                placeholder="Password..."
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                required
              />
              <Button
                disabled={loading}
                variant="contained"
                type="submit"
                style={{ letterSpacing: "5px" }}
              >
                Login
              </Button>
            </div>
          ) : (
            <div>
              <input
                placeholder="david.cicconi94@gmail.com"
                type="text"
                name="email"
                value={email}
                onChange={onChangeEmail}
                disabled
              />
              <Button
                disabled={loading}
                variant="contained"
                type="submit"
                style={{ letterSpacing: "5px" }}
              >
                Logout
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
