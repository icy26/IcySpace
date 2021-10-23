import React from "react";
import { ContainerCars, CCimg, Blanket, CarLabel } from "../CarElements";
import E46main from "components/images/cars/e46/E46Main.jpg";
import InspectProjE46 from "./InspectProjE46";

export default class InspectCarE46 extends React.Component {
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
          <CCimg src={E46main} />
          <Blanket style={{ backgroundColor: "rgba(0, 45, 80,0.55)" }}>
            <CarLabel>E46 330ci</CarLabel>
          </Blanket>
        </ContainerCars>

        {isInspect && <InspectProjE46 toggleMenu={this.toggleMenu} />}
      </>
    );
  }
}
