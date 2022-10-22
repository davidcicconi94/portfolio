import React from "react";
import "./Projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import fitFocus from "../../images/fit-focus.jpg";

type ProjectProps = {
  projectTitle: string;
  projectImg: string;
  url: string;
  description: string;
  technologies: Array<string>;
  isAdmin: boolean;
};

const ProjectCard = ({
  projectTitle,
  projectImg,
  url,
  description,
  technologies,
  isAdmin = false,
}: ProjectProps) => {
  return (
    <>
      <a href={url} target="blank" className="projectCard">
        <div>
          <img src={projectImg} alt="Project-img.jpg" />
          <Typography color="black" variant="h5" className="projectTitle">
            {projectTitle}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">About project</Typography>
          <Typography variant="h6"> {description} </Typography>
          <Typography variant="h6"> Tech Stack: {technologies} </Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "red" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects: React.FC = () => {
  const projects: Array<any> = [1, 2, 3];

  return (
    <div className="projects">
      <Typography variant="h3">
        PROJECTS <AiOutlineProject />
      </Typography>

      <div className="projectsContainer">
        {projects.map((project, index) => (
          <ProjectCard
            projectTitle="Fit-Focus App"
            projectImg={fitFocus}
            url="https://www.youtube.com/watch?v=eEBadWJC3Bo&t=2s"
            description="Esta es la descripcion"
            technologies={["React , MongoDB", "Node"]}
            isAdmin={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
