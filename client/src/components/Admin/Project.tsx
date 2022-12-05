import React from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";
import { Button, Typography } from "@mui/material";

const Project = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <form>
          <Typography variant="h4">Add a new project:</Typography>
          <label>Title:</label>
          <input type="text" />

          <label>URL:</label>
          <input type="text" />

          <label>Image:</label>
          <input type="text" />

          <label>Description: </label>
          <textarea name="description" cols={30} rows={10}></textarea>

          <label>Technologies:</label>
          <input type="text" />

          <div className="buttonsContainer">
            <Button type="submit" variant="contained">
              Add project
            </Button>
            <Button variant="contained" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Project;
