import React from "react";
import {
  PassionCont,
  PopPassion,
  PassionHead,
  PassionText,
  PassionPicCont,
  PassionPic
} from "./CarElements";
import PassionImg from "/src/Components/Images/Extras/passion.jpg";

export default class PassionM extends React.Component {
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
        {!isInspect && (
          <PopPassion onClick={() => this.toggleMenu()}>
            <h1 style={{ marginTop: "10px" }}>^</h1>
            <p style={{ marginTop: "-40px" }}>Car Passion</p>
          </PopPassion>
        )}

        {isInspect && (
          <PassionCont>
            <div onClick={() => this.toggleMenu()}>
              <p style={{ marginTop: "6px" }}>V</p>
              <PassionHead style={{ marginTop: "-16px" }}>
                Passion For Cars
              </PassionHead>
            </div>
            <PassionText style={{ marginTop: "5px" }}>
              Since young I have always felt compelled by extreme sports and
              adrenaline thrilling activities. It was no surprise when my
              attraction to sports such as parkour, rock climbing and mountain
              biking soon turned into a passion for cars. The sound of loud
              engines and the smell of burnt petrol feels like theatre to me,
              but it’s the artwork of the engineering within high performance
              cars that strikes a chord with me. My perspective towards these
              machines keeps growing the more I learn about them and the
              advancement in technology never fails to impress me. I was
              recently lucky enough to attend the Goodwood Festival of Speed
              2021, and it completely blew me away. From the moment of stepping
              out the car you could hear the race car engines from a kilometer
              away and the more I explored the event the more overwhelmed I
              felt. It doesn’t just stop at cars, in fact this all originated
              with aircraft. My dad was the manager of a hanger for Cabair and
              as kids he would take me and my brother to the hanger and we would
              sit in the small aircraft and see the aircraft being worked on. He
              developed my addiction for fixing things mechanically and gave me
              the opportunity to progress that through to cars. It’s this
              connection with the engineering and technology that I plan on
              always maintaining in my future and I hope to not see the end of
              these projects.
            </PassionText>
            <PassionPicCont>
              <PassionPic src={PassionImg} />
            </PassionPicCont>
          </PassionCont>
        )}
      </>
    );
  }
}
