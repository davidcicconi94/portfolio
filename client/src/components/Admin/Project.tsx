import React, { SetStateAction, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";
import { Button, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { addProject, getProfileInfo, loadUser } from "../../slices/userSlice";

type ProjectProps = {
  title: string;
  url: string;
  description: string;
  techStack: string;
};

const Project = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [image, setImage] = useState<string | ArrayBuffer | null>("");
  const [description, setDescription] = useState<string>("");
  const [techStack, setTechStack] = useState<string>("");

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(addProject({ title, url, description, image, techStack }));

    //Hay que obtener usuario
    dispatch(loadUser());
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4">Add a new project:</Typography>
          <label>Title:</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            value={title}
          />

          <label>URL:</label>
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            name="url"
            value={url}
          />

          <label>Image:</label>
          <input onChange={handleImage} type="file" accept="image/*" />

          <label>Description: </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            cols={30}
            rows={10}
            value={description}
          ></textarea>

          <label>Technologies:</label>
          <input
            onChange={(e) => setTechStack(e.target.value)}
            type="text"
            name="techStack"
            value={techStack}
          />

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
