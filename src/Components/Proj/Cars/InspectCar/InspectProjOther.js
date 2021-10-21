import React from "react";
import { CloseD, CloseM } from "/src/Components/Proj/ProjElements";
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
import ProjDropDownOther from "./ProjDropDownOther";
import { Slider } from "/src/Components/Proj/Slides/Slider";
import AygoS from "/src/Components/Proj/Slides/CarSlides/AygoS.js";

export default class InspectProjOther extends React.Component {
  constructor(props) {
    super(props);
    this.chooseProj = this.chooseProj.bind(this);
  }

  state = {
    whichProj: "Aygo"
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
              {whichProj === "Aygo" && (
                <InspectCarSS>
                  <Slider slides={AygoS} />
                </InspectCarSS>
              )}
              <CarProjChooser>
                {/* <InspectOptions onClick={() => this.chooseProj("Main")}>
                  Main
                </InspectOptions> */}
                <InspectOptions onClick={() => this.chooseProj("Aygo")}>
                  AYGO PART OUT
                </InspectOptions>
              </CarProjChooser>
            </InspectCarL>
            {whichProj === "Main" && (
              <InspectTxtCont>
                <text style={{ fontSize: "22px" }}>Main</text>
              </InspectTxtCont>
            )}
            {whichProj === "Aygo" && (
              <InspectTxtCont>
                <div style={{ marginTop: "6px" }} />
                <text>Part Out - 2007 Toyota Aygo</text>
                <div style={{ marginTop: "18px" }} />
                <text style={{ fontSize: "20px" }}>
                  My friend acquired a 2007 Toyota Aygo which unfortunately
                  failed it’s MOT due to excessive rust on the undercarriage.
                  Prices from car buying companies were ridiculously low so we
                  decided to part it out ourselves. It was an opportunity to
                  explore all the main components of the car first hand and how
                  they all go together whilst making a little bit of money
                  selling all the parts individually.
                </text>
                <div style={{ marginTop: "8px" }} />
                <text style={{ fontSize: "20px" }}>
                  Being a Japanese car it was a very simply put together car and
                  was a great learning experience. Being able to undertake this
                  project with a friend was great fun and a massive help. We
                  were able to completely strip the engine bay in 3 days,
                  bearing in mind it was our first time performing such a task.
                  Parts like the engine, gearbox, ac compressor, radiator,
                  alternator, starter motor, back box, catalytic converter and
                  more all sold very quickly and after one week we had finished
                  having our fun and scrapped the remaining shell of the car.
                </text>
              </InspectTxtCont>
            )}
            <CloseD onClick={() => this.props.toggleMenu()}>X</CloseD>
          </InspectCarContainerD>
        </CarProjSurround>
        <CarProjSurroundM>
          <InspectCarContainerM>
            <ProjDropDownOther chooseProj={this.chooseProj} />
            <CloseM onClick={() => this.props.toggleMenu()}>x</CloseM>
            {whichProj === "Main" && (
              <>
                <InspectCarSS>
                  {/* <Slider slides={FezMainS} /> */}
                </InspectCarSS>
                <InspectTxtCont>
                  <text style={{ fontSize: "18px" }}>Main</text>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "Aygo" && (
              <>
                <InspectCarSS>
                  <Slider slides={AygoS} />
                </InspectCarSS>
                <InspectTxtCont>
                  <div style={{ marginTop: "6px" }} />
                  <text>Part Out - 2007 Toyota Aygo</text>
                  <div style={{ marginTop: "6px" }} />
                  <text style={{ fontSize: "15px" }}>
                    My friend acquired a 2007 Toyota Aygo which unfortunately
                    failed it’s MOT due to excessive rust on the undercarriage.
                    Prices from car buying companies were ridiculously low so we
                    decided to part it out ourselves. It was an opportunity to
                    explore all the main components of the car first hand and
                    how they all go together whilst making a little bit of money
                    selling all the parts individually.
                  </text>
                  <div style={{ marginTop: "4px" }} />
                  <text style={{ fontSize: "15px" }}>
                    Being a Japanese car it was a very simply put together car
                    and was a great learning experience. Being able to undertake
                    this project with a friend was great fun and a massive help.
                    We were able to completely strip the engine bay in 3 days,
                    bearing in mind it was our first time performing such a
                    task. Parts like the engine, gearbox, ac compressor,
                    radiator, alternator, starter motor, back box, catalytic
                    converter and more all sold very quickly and after one week
                    we had finished having our fun and scrapped the remaining
                    shell of the car.
                  </text>
                </InspectTxtCont>
              </>
            )}
          </InspectCarContainerM>
        </CarProjSurroundM>
      </>
    );
  }
}
