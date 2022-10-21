import { Typography } from "@mui/material";
import React from "react";
import "./ProjectCard.css";

interface Video {
  title: string;
  url: string;
  image: string;
  source: string;
  description: string;
}

const ProjectCard = () => {
  const video1: Video = {
    title: "Fit-Focus App",
    url: "https://www.youtube.com/watch?v=eEBadWJC3Bo",
    image: "http",
    description: "App para bajar de peso",
    source: "www.git",
  };

  const { title, url, image, description, source } = video1;

  return (
    <div className="cardProject">
      <a href={url} target="blank" rel="noreferrer">
        <Typography variant="h4"> {title} </Typography>
        <img src={image} alt={title} />
      </a>
      <p> {description} </p>
      <p>Source: {source} </p>
    </div>
  );
};

export default ProjectCard;
