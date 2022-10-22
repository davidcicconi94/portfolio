import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import nucleoImg from "../../images/nucleo.jpg";
import backgroundImg from "../../images/background.jpg";
import { Typography } from "@mui/material";
import Timelines from "../Timelines/Timelines";
import {
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiHtml5,
  SiAngular,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaCss3 } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

import javascript from "../../images/js.png";
import mongo from "../../images/mongo.png";
import react from "../../images/react.png";
import typescript from "../../images/typescript.svg";
import node from "../../images/node.png";
import angular from "../../images/angular.png";

import youtube from "../../images/youtube.png";
import henry from "../../images/certificado-henry.jpg";
import redjar from "../../images/redjar-angular.jpg";
import argPrograma from "../../images/ArgentinaPrograma.jpg";
import scrum from "../../images/scrum.jpg";
import efset from "../../images/efset.jpg";

import CertificateCard from "../CertificatesCard/CertificateCard";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const nucleoTexture = textureLoader.load(nucleoImg);
    const backgroundTexture = textureLoader.load(backgroundImg);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: nucleoTexture });

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(4, 8, 8);

    const nucleo = new THREE.Mesh(moonGeometry, moonMaterial);

    scene.add(nucleo);
    scene.add(pointLight);
    scene.background = backgroundTexture;

    const speed = 0.003;
    window.addEventListener("mousemove", (event) => {
      if (event.clientX <= window.innerWidth / 2) {
        nucleo.rotation.x -= speed;
        nucleo.rotation.y += speed;
      }

      if (event.clientX > window.innerWidth / 2) {
        nucleo.rotation.x -= speed;
        nucleo.rotation.y -= speed;
      }

      if (event.clientY > window.innerHeight / 2) {
        nucleo.rotation.x -= speed;
        nucleo.rotation.y += speed;
      }

      if (event.clientY <= window.innerHeight / 2) {
        nucleo.rotation.x -= speed;
        nucleo.rotation.y -= speed;
      }
    });

    camera.position.set(0, 0, 9);

    (function animate() {
      requestAnimationFrame(animate);

      nucleo.rotation.y += 0.001;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    })();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography align="center" variant="h3">
          TIMELINE
        </Typography>
        <Timelines timelines={[1, 2, 3, 4, 5, 6]} />
      </div>

      <div className="skills">
        <Typography align="center" variant="h3">
          SKILLS
        </Typography>
        <div className="cubeSkills">
          <div className="cubeFace face1">
            <img src={javascript} alt="face1" />
          </div>
          <div className="cubeFace face2">
            <img src={typescript} alt="face2" />
          </div>
          <div className="cubeFace face3">
            <img src={node} alt="face3" />
          </div>
          <div className="cubeFace face4">
            <img src={mongo} alt="face4" />
          </div>
          <div className="cubeFace face5">
            <img src={react} alt="face5" />
          </div>
          <div className="cubeFace face6">
            <img src={angular} alt="face6" />
          </div>
        </div>
        <div className="sideSkills">
          <SiHtml5 data-tip data-for="html" />
          <FaCss3 data-tip data-for="css" />
          <SiJavascript data-tip data-for="javascript" />
          <SiTypescript data-tip data-for="ts" />
          <FaReact data-tip data-for="react" />
          <SiAngular data-tip data-for="angular" />
          <SiMongodb data-tip data-for="mongo" />
          <SiPostgresql data-tip data-for="posgre" />
          <FaNodeJs data-tip data-for="node" />

          <div className="tooltips">
            <ReactTooltip
              id="javascript"
              place="left"
              effect="solid"
              backgroundColor="#EDAA09"
            >
              Javascript
            </ReactTooltip>

            <ReactTooltip
              id="html"
              place="left"
              effect="solid"
              backgroundColor="#F78431"
            >
              HTML
            </ReactTooltip>

            <ReactTooltip
              id="css"
              place="left"
              effect="solid"
              backgroundColor="#2F9BED"
            >
              CSS3
            </ReactTooltip>

            <ReactTooltip
              id="react"
              place="left"
              effect="solid"
              backgroundColor="#0CBFF0"
            >
              ReactJS
            </ReactTooltip>

            <ReactTooltip
              id="angular"
              place="left"
              effect="solid"
              backgroundColor="#E30030"
            >
              Angular
            </ReactTooltip>

            <ReactTooltip
              id="mongo"
              place="left"
              effect="solid"
              backgroundColor="#00BE0C"
            >
              MongoDB
            </ReactTooltip>

            <ReactTooltip
              id="ts"
              place="left"
              effect="solid"
              backgroundColor="#2D31C4"
            >
              Typescript
            </ReactTooltip>

            <ReactTooltip
              id="node"
              place="left"
              effect="solid"
              backgroundColor="#00BF2E"
            >
              NodeJS
            </ReactTooltip>

            <ReactTooltip
              id="posgre"
              place="left"
              effect="solid"
              backgroundColor="#8C835F"
            >
              PostgreSQL
            </ReactTooltip>
          </div>
        </div>
      </div>

      <div className="certificates">
        <Typography variant="h3" align="center">
          CERTIFICATES
        </Typography>

        <div className="certificatesContainer">
          <CertificateCard title="Full Stack Web Developer" image={henry} />
          <CertificateCard title="Angular Bootcamp" image={redjar} />

          <CertificateCard title="Argentina Programa" image={argPrograma} />
          <CertificateCard title="SCRUM" image={scrum} />
          <CertificateCard title="EFSET: B2 Upper Intermediate" image={efset} />
        </div>
      </div>
    </div>
  );
};

export default Home;
