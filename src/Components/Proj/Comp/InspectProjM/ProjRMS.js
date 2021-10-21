import React from "react";
import { CloseM } from "/src/Components/Proj/ProjElements";
import {
  Large,
  TxtM,
  InsButton,
  SlideM,
  ImgM,
  LargeFull
} from "../CompElements";
import { Slider } from "/src/Components/Proj/Slides/Slider";
import RMSSlides from "/src/Components/Proj/Slides/CompSlides/RMSSlides.js";
import Cover from "/src/Components/Images/Comp/CompCovers/RMSCover2.png";

export default class ProjRMS extends React.Component {
  state = {
    isInspect: false
  };

  toggleMenu() {
    this.setState({ isInspect: !this.state.isInspect });
  }

  render() {
    const isInspect = this.state.isInspect;
    return (
      <>
        <InsButton onClick={() => this.toggleMenu()}>
          <ImgM src={Cover} style={{ marginLeft: "px" }} />
        </InsButton>

        {isInspect && (
          <LargeFull>
            <Large>
              <SlideM>
                <Slider slides={RMSSlides} />
              </SlideM>
              <TxtM style={{ backgroundColor: "rgba(255, 255, 240 ,0.95)" }}>
                <h1 style={{ fontSize: "18px" }}>
                  {" "}
                  OAXACA - Team Software Development of a Restaurant Management
                  System{" "}
                </h1>
                As part of our full stack team software development project in
                the 2nd year of the degree, we were delegated teams and were
                tasked to build a restaurant management system using any
                programming language and UI framework of our choice. Naturally
                we chose to write the application in Java as this is the
                language that was taught at the university. JavaFx made a good
                fit as the UI framework as the entirety of the team was
                comfortable using designing with this. We were provided a
                specification of what was required from the application and the
                project as a whole. User stories for particular stakeholders
                were identified within the specification and these were
                distributed between members of the team to focus on how this
                would be designed and developed. The product included
                functionality such as authentication and authorization, a menu
                view and adding products to a basket, checkout passing the order
                to the kitchen view, a feedback page where the customers can
                review their experience and more. The development proceeded
                using an agile methodology using GitHub as the Version Control
                System. This process included scheduling ‘scrum meetings’ which
                were vital for our productivity and management as team members
                could analyse and provide feedback on current work, future plans
                and challenges. We would then focus on development in sub-teams
                where we would prototype functions, test them using Test Driven
                Development (TDD) and finalise the development ready to be
                merged into the production branch (master) of the project. This
                project taught me the importance of communication and successful
                team management in the production of an application. I built
                skills using version control within a team and managing
                development branches using agile methodology. Further
                information can be found in a downloaded ZIP folder.
              </TxtM>
              <CloseM onClick={() => this.toggleMenu()}>x</CloseM>
            </Large>
          </LargeFull>
        )}
      </>
    );
  }
}
