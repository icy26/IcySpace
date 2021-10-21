import React from "react";
import {
  Welcome,
  HomeContainer,
  Explore,
  Pad,
  ExpM,
  ExpD
} from "./HomeElements";
import { Link as LinkS } from "react-scroll";

const Home = () => {
  return (
    <>
      <HomeContainer id="home">
        <Welcome style={{ paddingTop: "30vh" }}>WELCOME TO</Welcome>
        <Welcome>ICY'S SPACE</Welcome>
        <ExpM to="projectsM" spy={true} smooth={true} duration={1000}>
          Start Exploring >
        </ExpM>
        <ExpD to="projects" spy={true} smooth={true} duration={1000}>
          Start Exploring >
        </ExpD>
        <Pad id="projectsM" />
      </HomeContainer>
    </>
  );
};

export default Home;
