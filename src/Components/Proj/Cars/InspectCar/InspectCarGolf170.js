import React from "react";
import { ContainerCars, CCimg, Blanket, CarLabel } from "../CarElements";
import Newmain from "/src/Components/Images/Cars/Golf170/Newmain.jpeg";
import InspectProjGolf170 from "./InspectProjGolf170";

export default class InspectCarGolf170 extends React.Component {
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
        {/* <ContainerCars onClick={() => this.toggleMenu()}> */}
        <ContainerCars>
          <CCimg src={Newmain} />
          <Blanket style={{ backgroundColor: "rgba(255, 255, 255,0.1)" }}>
            <CarLabel>NEW</CarLabel>
          </Blanket>
        </ContainerCars>

        {isInspect && <InspectProjGolf170 toggleMenu={this.toggleMenu} />}
      </>
    );
  }
}
