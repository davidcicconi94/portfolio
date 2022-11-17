import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  clearError,
  clearMessage,
  login,
  logout,
} from "../../slices/authSlice";
import { getProfileInfo, loadUser } from "../../slices/userSlice";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading, message, error } = useAppSelector(
    (state) => state.auth
  );
  const { name } = useAppSelector((state) => state.user);

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
      Swal.fire({
        position: "top",
        icon: "error",
        title: `${error}`,
        showConfirmButton: true,
        confirmButtonText: "Try again!",
        confirmButtonColor: "#000000",
      });
      dispatch(clearError());
    }
    if (message && !error) {
      dispatch(loadUser());
      dispatch(getProfileInfo());

      Swal.fire({
        icon: "success",
        title: `${message} ${name} ! `,
        showConfirmButton: false,
        position: "top",
        timer: 1500,
      });
      dispatch(clearMessage());
      // Redireccionar
    }
  }, [error, message, dispatch, name]);

  const handleLogout = () => {
    dispatch(logout());
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
                style={{ letterSpacing: "5px" }}
                onClick={handleLogout}
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
