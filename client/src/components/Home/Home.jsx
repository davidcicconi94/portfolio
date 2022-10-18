import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImg from "../../images/moon.jpg";
import sunImg from "../../images/sun.jpg";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImg);
    const sunTexture = textureLoader.load(sunImg);

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

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);

    const controls = new OrbitControls(camera, renderer.domElement);

    scene.add(moon);
    scene.add(sun);
    scene.add(pointLight);
    scene.add(lightHelper);

    camera.position.set(4, 4, 8);
    sun.position.set(8, 5, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      moon.rotation.y += 0.005;
      sun.rotation.y += 0.001;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;
