import React from "react";
import { ContainerCars, CCimg, Blanket, CarLabel } from "../CarElements";
import InspectProjOther from "./InspectProjOther";

export default class InspectCarOther extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

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
        <ContainerCars onClick={() => this.toggleMenu()}>
          {/* <ContainerCars> */}
          {/* <CCimg src={} /> */}
          {/* <div
            style={{ height: "100%", width: "100%", backgroundColor: "black" }}
          /> */}
          <Blanket style={{ backgroundColor: "rgba(140, 70, 250,0.6)" }}>
            <CarLabel>Other</CarLabel>
          </Blanket>
        </ContainerCars>

        {isInspect && <InspectProjOther toggleMenu={this.toggleMenu} />}
      </>
    );
  }
}
