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
import testSlides from "/src/Components/Proj/Slides/testSlides";
// import cover from "/src/Components/Images/TestImgs/carFill.jpeg";

export default class ProjTest extends React.Component {
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
          <ImgM src={cover} />
        </InsButton>

        {isInspect && (
          <LargeFull>
            <Large>
              <SlideM>
                <Slider slides={testSlides} />
              </SlideM>
              <TxtM style={{ backgroundColor: "rgba(255, 255, 240 ,0.92)" }} />
              <CloseM onClick={() => this.toggleMenu()}>x</CloseM>
            </Large>
          </LargeFull>
        )}
      </>
    );
  }
}
