import React from "react";
import {
  AboutContainer,
  H3ad,
  He4d,
  Grad2,
  TxtContain,
  TxtM,
  TxtD
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer
        id="about"
        // style={{ backgroundColor: "rgba(33, 19, 58,1)" }}
      >
        <Grad2 />
        <He4d>ABOUT</He4d>
        <TxtContain>
          <TxtM>
            <text>
              Welcome to Icy’s Space, a web application I built as a portfolio
              to capture my achievements and document my past projects.
            </text>
            <div style={{ marginTop: "6px" }}></div>
            <text>
              My name is Imran Chagani, I am a computer science graduate from
              Royal Holloway University of London, with an aspiration in
              software engineering and development. I find all aspects of
              software development captivating, however I am especially drawn to
              developing algorithms, web development and more recently deep
              learning. I have a desire to push the boundaries of technology
              through the improvement and evolution of software. My passions lie
              in the motorsports and automotive industry, although I am also
              very interested in research in the medical, neuroscience and
              biotechnical fields. Artificial Intelligence is very gripping to
              me as it captures my fascination with the brain along with my
              expertise in technology.
            </text>
            <div style={{ marginTop: "6px" }}></div>
            <text>
              I plan on continuing the gradual development of Icy’s Space to
              document my progress in my areas of interest and to remind myself
              to be proud of my work. I would like to see the level of the
              projects I undertake to become more advanced and the calibre of my
              documentation and research to continuously improve. I also plan on
              adding a few more features to the web application including more
              fun animations and an “upcoming projects” page to keep me
              motivated.
            </text>
            <div style={{ marginTop: "10px" }}></div>
            <div style={{ textAlign: "center" }}>
              I hope you enjoy exploring
            </div>
            <div style={{ textAlign: "center" }}>Icy’s Space</div>
          </TxtM>
          <TxtD>
            <text>
              Welcome to Icy’s Space, a web application I built as a portfolio
              to capture my achievements and document my past projects.
            </text>
            <div style={{ marginTop: "6px" }}></div>
            <text>
              My name is Imran Chagani, I am a computer science graduate from
              Royal Holloway University of London, with an aspiration in
              software engineering and development. I find all aspects of
              software development captivating, however I am especially drawn to
              developing algorithms, web development and more recently deep
              learning. I have a desire to push the boundaries of technology
              through the improvement and evolution of software. My passions lie
              in the motorsports and automotive industry, although I am also
              very interested in research in the medical, neuroscience and
              biotechnical fields. Artificial Intelligence is very gripping to
              me as it captures my fascination with the brain along with my
              expertise in technology.
            </text>
            <div style={{ marginTop: "6px" }}></div>
            <text>
              I plan on continuing the gradual development of Icy’s Space to
              document my progress in my areas of interest and to remind myself
              to be proud of my work. I would like to see the level of the
              projects I undertake to become more advanced and the calibre of my
              documentation and research to continuously improve. I also plan on
              adding a few more features to the web application including more
              fun animations and an “upcoming projects” page to keep me
              motivated.
            </text>
            <div style={{ marginTop: "10px" }}></div>
            <div style={{ textAlign: "center" }}>
              I hope you enjoy exploring
            </div>
            <div style={{ textAlign: "center" }}>Icy’s Space</div>
          </TxtD>
        </TxtContain>
      </AboutContainer>
    </>
  );
};

export default About;
