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
import code from "components/images/main/codeBG.jpeg";
import car from "components/images/main/carBG.jpg";
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
             {/*<Selectors*/}
             {/*    style={{ borderRadius: "0px 22px 22px 0px", color: "white" }}*/}
             {/*    to="/CV"*/}
             {/*    onClick={goTop}*/}
             {/*>*/}
             {/*    <Carpic src={car} />*/}
             {/*</Selectors>*/}
         </ProjectChooser>
          <Pad id="aboutM" />
          <Grad />
      </ProjectContainer>
    </>
  );
};

export default Project;
