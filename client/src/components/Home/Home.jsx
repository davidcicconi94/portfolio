import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImg from "../../images/moon.jpg";
import sunImg from "../../images/sun.jpg";
import spaceImg from "../../images/space.jpg";
import { Typography } from "@mui/material";
import Timelines from "../Timelines/Timelines";
import me from "../../images/yo.jpg";
import {
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiHtml5,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaCss3 } from "react-icons/fa";
const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImg);
    const sunTexture = textureLoader.load(sunImg);
    const spaceTexture = textureLoader.load(spaceImg);

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
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });

    const sunGeometry = new THREE.SphereGeometry(3, 64, 64);
    const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-8, -5, -5);

    const lightHelper = new THREE.PointLightHelper(pointLight);

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);

    const controls = new OrbitControls(camera, renderer.domElement);

    scene.add(moon);
    scene.add(sun);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(lightHelper);
    scene.background = spaceTexture;

    const speed = 0.001;
    window.addEventListener("mousemove", (event) => {
      if (event.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y += speed;
        sun.rotation.x -= speed;
        sun.rotation.y += speed;
      }

      if (event.clientX > window.innerWidth / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y -= speed;
        sun.rotation.x -= speed;
        sun.rotation.y -= speed;
      }

      if (event.clientY > window.innerHeight / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y += speed;
        sun.rotation.x -= speed;
        sun.rotation.y += speed;
      }

      if (event.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= speed;
        moon.rotation.y -= speed;
        sun.rotation.x -= speed;
        sun.rotation.y -= speed;
      }
    });

    sun.position.set(7.5, 5, 5);
    camera.position.set(3, 4, 9);

    const animate = () => {
      requestAnimationFrame(animate);

      moon.rotation.y += 0.001;
      sun.rotation.y += 0.001;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
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
            <img src={me} alt="face1" />
          </div>
          <div className="cubeFace face2">
            <img src={me} alt="face2" />
          </div>
          <div className="cubeFace face3">
            <img src={me} alt="face3" />
          </div>
          <div className="cubeFace face4">
            <img src={me} alt="face4" />
          </div>
          <div className="cubeFace face5">
            <img src={me} alt="face5" />
          </div>
          <div className="cubeFace face6">
            <img src={me} alt="face6" />
          </div>
        </div>
        <div className="sideSkills">
          <SiHtml5 />
          <span class="tooltiptext">Tooltip text</span>
          <FaCss3 />
          <SiJavascript />
          <FaReact />
          <SiMongodb />
          <SiTypescript />
          <FaNodeJs />
          <SiPostgresql />
        </div>
      </div>

      <div className="projects">
        <Typography variant="h3" align="center">
          PROJECTS
        </Typography>
      </div>
    </div>
  );
};

export default Home;
