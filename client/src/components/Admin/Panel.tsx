import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadUser, updateUser } from "../../slices/userSlice";
import "./Panel.css";

const Panel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const user = useAppSelector((state) => state.user);
  const aboutUser = useAppSelector((state) => state.user.about);

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const [password, setPassword] = useState<string>(user.password);
  const [about, setAbout] = useState({
    name: aboutUser.name,
    title: aboutUser.title,
    description: aboutUser.description,
    quote: aboutUser.quote,
  });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User updated!",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(updateUser({ name, email, password, about }));
  };

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
            className="adminPanelInputs"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
            className="adminPanelInputs"
          />

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder="Name"
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Title"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className="adminPanelInputs"
              />

              <input
                type="text"
                placeholder="Description"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                className="adminPanelInputs"
              />
            </fieldset>
          </div>
          <Button type="submit" variant="contained">
            Update
          </Button>
          <Button
            onClick={() => navigate("/new/project")}
            style={{ backgroundColor: "#ac0404" }}
            variant="contained"
          >
            Add Projects
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Panel;
