import React from "react";
import { ContainerCars, CCimg, Blanket, CarLabel } from "../CarElements";
import Fezmain from "components/images/cars/fez/FezMain.jpg";
import InspectProjFez from "./InspectProjFez";

export default class InspectCarFez extends React.Component {
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
          <CCimg src={Fezmain} />
          <Blanket style={{ backgroundColor: "rgba(200, 0, 0,0.5)" }}>
            <CarLabel>FIESTA</CarLabel>
          </Blanket>
        </ContainerCars>

        {isInspect && <InspectProjFez toggleMenu={this.toggleMenu} />}
      </>
    );
  }
}
