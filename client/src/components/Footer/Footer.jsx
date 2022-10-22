import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <Typography variant="h5">About me</Typography>
        <Typography>
          Hi!. my name is David Cicconi. I'm full stack developer graduated from{" "}
          <b>Henry</b> in 2022.
        </Typography>

        <Typography>
          <Button variant="outlined">
            <Link to="/contact" classname="btnContact">
              Contact Me
            </Link>
          </Button>
        </Typography>
      </div>
      <div className="socialMedias">
        <Typography variant="h5"> Social Media</Typography>
        <a href="https://www.linkedin.com/in/david-cicconi-dev/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/davidcicconi94" target="blank">
          <BsGithub />
        </a>
        <a href="https://twitter.com/CicconiDavid" target="blank">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
