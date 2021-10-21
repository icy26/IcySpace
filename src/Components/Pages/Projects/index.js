import React from "react";
import {
  ProjectContainer,
  H3ader,
  ProjectChooser,
  Selectors,
  Codepic,
  Carpic,
  Pad,
  Grad
} from "./ProjectElements";
import code from "/src/Components/Images/Main/codeBG.jpeg";
import car from "/src/Components/Images/Main/carBG.jpg";
import { animateScroll as sScroll } from "react-scroll";

const Project = () => {
  const goTop = () => {
    sScroll.scrollToTop();
  };
  return (
    <>
      <ProjectContainer id={"projects"}>
        <H3ader>PROJECTS</H3ader>
        <ProjectChooser>
          {/* Two Projects Dev */}
          <Selectors
            style={{ borderRadius: "22px 0px 0px 22px", color: "white" }}
            to="/Comp"
            onClick={goTop}
          >
            <Codepic src={code} />
          </Selectors>
          <Selectors
            style={{ borderRadius: "0px 22px 22px 0px", color: "white" }}
            to="/Cars"
            onClick={goTop}
          >
            <Carpic src={car} />
          </Selectors>
        </ProjectChooser>
        {/* Three Projects FINAL
         <ProjectChooser>
          <Selectors
            style={{ borderRadius: "22px 0px 0px 22px", color: "white" }}
            to="/Comp"
            onClick={goTop}
          >
            <Codepic src={code} />
          </Selectors>
          <Selectors style={{ color: "white" }} to="/Cars" onClick={goTop}>
            <Carpic src={car} />
          </Selectors>
          <Selectors
            style={{ borderRadius: "0px 22px 22px 0px", color: "white" }}
            to="/Proj"
            onClick={goTop}
          >
            <Otherpic src={other} />
          </Selectors>
        </ProjectChooser> */}
        <Pad id="aboutM" />
        <Grad />
      </ProjectContainer>
    </>
  );
};

export default Project;
