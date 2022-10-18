import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/yo.jpg";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#A70E0E"
      burgerColorHover="#6F0303"
      navColor1="black"
      navColor2="#2E2E2E"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      logoHoverColor="gray"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1Color="white"
      link1Size="1.8rem"
      logo={logo}
      logoWidth="12rem"
      link1ColorHover="#A70E0E"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColorHover="#A70E0E"
      link1Padding=".4rem"
    />
  );
};

export default Header;
