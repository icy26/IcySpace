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
import GameSlides from "/src/Components/Proj/Slides/CompSlides/GameSlides.js";
import Cover from "/src/Components/Images/Comp/CompCovers/GameCover.png";

export default class ProjGame extends React.Component {
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
                <Slider slides={GameSlides} />
              </SlideM>
              <TxtM style={{ backgroundColor: "rgba(255, 255, 240 ,0.92)" }}>
                <h1 style={{ fontSize: "18px" }}>
                  2D Game Project with Python
                </h1>
                The second team software development project in university was
                the gaming project. The layout of this was very similar to the
                robotics project in the sense that as a team we would learn the
                basics using lab exercises and would then be tasked to create
                our own 2D game. The difference was that we were required to use
                python as the programming language. This was the first time most
                students in the course including myself were tasked to use
                python for a software project and tested my ability to learn a
                new programming language within a short period of time.
                <div></div>
                The game the team decided to develop was going to be an infinite
                level platform based game with rounds. There were an unlimited
                number of rounds where the platform's position and size were
                generated randomly but also in relation to the round number
                (higher rounds increasing in difficulty). We also used spawned
                enemies randomly with the number of enemies also in relation to
                the round number, and the distance of the enemies spawning far a
                set distance away from the player to ensure a fair game. The
                objective was to achieve the highest round number, eliminate all
                the enemies and collect coins used to upgrade your weapon whilst
                only having 3 lives. A boss enemy would also spawn every 4 or 5
                rounds to switch up the tempo of the game. Background images and
                custom sprites were used to liven up the game.
                <div></div>
                The game project was great fun and allowed us to explore our
                creative side. The most useful part of this project was having
                to learn a new programming language whilst also developing with
                it and this has proved useful in future projects where I was
                required to learn new programming languages or techniques on the
                go.
              </TxtM>
              <CloseM onClick={() => this.toggleMenu()}>x</CloseM>
            </Large>
          </LargeFull>
        )}
      </>
    );
  }
}
