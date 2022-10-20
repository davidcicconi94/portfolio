import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/yo.jpg";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#4E342E"
      burgerColorHover="#D7CCC8 "
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
      link1ColorHover="#D7CCC8"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColorHover="#D7CCC8"
      link1Padding=".4rem"
    />
  );
};

export default Header;
