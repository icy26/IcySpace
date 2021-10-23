import React from "react";
import { CloseD, CloseM } from "components/proj/ProjElements";
import {
  CarProjChooser,
  CarProjSurround,
  InspectCarContainerD,
  InspectCarL,
  InspectCarSS,
  InspectOptions,
  InspectTxtCont,
  CarProjSurroundM,
  InspectCarContainerM
} from "../CarElements";
import ProjDropDownGolf170 from "./ProjDropDownGolf170";
//import { Slider } from "/src/components/proj/slides/Slider";
// import FezMainS from "/src/components/proj/slides/carSlides/FezMainS.js";

export default class InspectProjGolf170 extends React.Component {
  constructor(props) {
    super(props);
    this.chooseProj = this.chooseProj.bind(this);
  }

  state = {
    whichProj: "Main"
  };

  chooseProj(para) {
    this.setState({ whichProj: para });
  }

  render() {
    const whichProj = this.state.whichProj;
    return (
      <>
        <CarProjSurround>
          <InspectCarContainerD>
            <InspectCarL>
              {whichProj === "Main" && (
                <InspectCarSS>
                  {/* <Slider slides={FezMainS} /> */}
                </InspectCarSS>
              )}
              <CarProjChooser>
                <InspectOptions onClick={() => this.chooseProj("Main")}>
                  MAIN
                </InspectOptions>
              </CarProjChooser>
            </InspectCarL>
            {whichProj === "Main" && (
              <InspectTxtCont>
                <h1>Coming Soon</h1>
              </InspectTxtCont>
            )}
            <CloseD onClick={() => this.props.toggleMenu()}>X</CloseD>
          </InspectCarContainerD>
        </CarProjSurround>
        <CarProjSurroundM>
          <InspectCarContainerM>
            <ProjDropDownGolf170 chooseProj={this.chooseProj} />
            <CloseM onClick={() => this.props.toggleMenu()}>x</CloseM>
            {whichProj === "Main" && (
              <>
                <InspectCarSS>
                  {/* <Slider slides={FezMainS} /> */}
                </InspectCarSS>
                <InspectTxtCont>
                  <h1>Coming Soon</h1>
                </InspectTxtCont>
              </>
            )}
          </InspectCarContainerM>
        </CarProjSurroundM>
      </>
    );
  }
}
