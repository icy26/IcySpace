import React from "react";
import { CloseM } from "components/proj/ProjElements";
import {
  Large,
  TxtM,
  InsButton,
  SlideM,
  ImgM,
  LargeFull
} from "../CompElements";
import { Slider } from "components/proj/slides/Slider";
import RobotSlides from "components/proj/slides/compSlides/RobotSlides";
import Cover from "components/images/comp/compCovers/RoboticsCover.png";

export default class ProjRobotics extends React.Component {
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
          <ImgM src={Cover} />
        </InsButton>

        {isInspect && (
          <LargeFull>
            <Large>
              <SlideM>
                <Slider slides={RobotSlides} />
              </SlideM>
              <TxtM style={{ backgroundColor: "rgba(255, 255, 240 ,0.95)" }}>
                <h1 style={{ fontSize: "18px" }}>
                  Bridge Crossing Robot with Java
                </h1>
                One of the first projects that I had to undertake in university
                was to develop a working robot in the labs on campus within a
                small team. These teams of six were assigned to us and we were
                tasked to learn how to operate and code the robot within the
                first few weeks and later take the basics learned from the lab
                exercises to design and code a robot to perform a custom task of
                our choice.
                <div></div>
                The mechanics of the robot were built on the lego mindstorms
                base, using lego parts to put together the structure and moving
                parts of the robots. The software was developed on the EV3
                block, however the operating system had been replaced with
                LeJOS, a java based operating system, meaning we could develop
                the code using Java and the EV3 block would handle it to control
                the robot.
                <div></div>
                After learning the basics, we met up as a team to decide what
                our robot will do and how we plan on designing it. The final
                decision was a “Bridge Crossing Robot”. We wanted the robot to
                go around a course following the lines, detect when a “gap” was
                present and then put down the bridge over the gap, cross it, and
                then pick it back up to complete the course. Colour sensors were
                used to detect the edges of the course, an ultrasound sensor to
                measure depth and gaps and large motors would have in-built
                range sensors to measure the rotating distance motors.
                <div></div>
                This project was very beneficial at advancing my java skills and
                overall problem solving skill. The opportunity to engage in a
                team for software development was very insightful to see how
                much development could advance with the many ideas and solutions
                being suggested. The robot performed just as planned by the time
                of the final demo and overall the project was successful.
              </TxtM>
              <CloseM onClick={() => this.toggleMenu()}>x</CloseM>
            </Large>
          </LargeFull>
        )}
      </>
    );
  }
}
