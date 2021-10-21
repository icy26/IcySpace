import React from "react";
import "/src/styles.css";
import { Nav, NavLogo, NavDMenu, NavDButton } from "./NavbarElements";
import icyLogo from "/src/Components/Images/Main/icySpaceLogo.png";
import NavMButton from "./NavMButton.js";
import { animateScroll as sScroll } from "react-scroll";
import { Link as LinkR, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const goHome = () => {
    sScroll.scrollToTop();
    history.push("/");
  };

  const directHome = () => {
    history.push("/");
  };

  return (
    <>
      <Nav style={{ backgroundColor: "rgba(60,50,60,0.75" }}>
        <LinkR to="/">
          <NavLogo src={icyLogo} onClick={goHome} />
        </LinkR>
        <NavMButton />
        <NavDMenu>
          <NavDButton onClick={goHome} spy={true} smooth={true} duration={1000}>
            HOME
          </NavDButton>
          <NavDButton
            onClick={directHome}
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
          >
            PROJECTS
          </NavDButton>
          <NavDButton
            onClick={directHome}
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
          >
            ABOUT
          </NavDButton>
          <NavDButton
            onClick={directHome}
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            CONTACT
          </NavDButton>
        </NavDMenu>
      </Nav>
    </>
  );
};

export default Navbar;
