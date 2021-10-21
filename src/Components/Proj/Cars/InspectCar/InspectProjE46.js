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
import ProjDropDownE46 from "./ProjDropDownE46";
import { Slider } from "/src/Components/Proj/Slides/Slider";
import E46MainS from "/src/Components/Proj/Slides/CarSlides/E46MainS.js";
import E46SuspS from "/src/Components/Proj/Slides/CarSlides/E46SuspS";
import E46CCanS from "/src/Components/Proj/Slides/CarSlides/E46CCanS";

export default class InspectProjE46 extends React.Component {
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
                  <Slider slides={E46MainS} />
                </InspectCarSS>
              )}
              {whichProj === "Susp" && (
                <InspectCarSS>
                  <Slider slides={E46SuspS} />
                </InspectCarSS>
              )}
              {whichProj === "Ccan" && (
                <InspectCarSS>
                  <Slider slides={E46CCanS} />
                </InspectCarSS>
              )}
              {whichProj === "Ms" && (
                <InspectCarSS>
                  <h1>No Image Available</h1>
                </InspectCarSS>
              )}
              {whichProj === "Refurb" && (
                <InspectCarSS style={{ backgroundColor: "black" }} />
              )}
              <CarProjChooser>
                <InspectOptions onClick={() => this.chooseProj("Main")}>
                  MAIN
                </InspectOptions>
                <InspectOptions onClick={() => this.chooseProj("Susp")}>
                  STAGE 1.5 SUSPENSION
                </InspectOptions>
                <InspectOptions onClick={() => this.chooseProj("Ccan")}>
                  CUSTOM CATCH CAN
                </InspectOptions>
                <InspectOptions onClick={() => this.chooseProj("Ms")}>
                  SERVICE
                </InspectOptions>
              </CarProjChooser>
            </InspectCarL>
            {whichProj === "Main" && (
              <InspectTxtCont>
                <div style={{ marginTop: "5px" }}>
                  <text style={{ marginTop: "5px" }}>
                    BMW 3 Series E46 330ci
                  </text>
                  <div></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    About
                  </text>
                  <div></div>
                  <text style={{ fontSize: "20px" }}>
                    The E46 model has remained an all time favourite of mine
                    from the timeless design, the pure driving experience
                    through to the joy of working on such an interestingly
                    engineered machine. To have the opportunity to own a 330ci
                    was so much fun and gave me the opportunity to engage in
                    many projects to make the car feel like my own. Although
                    short lived, the time with my E46 only increased my passion
                    for cars even further and I hope to convert an E46 to a
                    track car in the future.
                  </text>
                </div>
                <div style={{ marginTop: "1%" }}>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Stats
                  </text>
                  <li style={{ display: "flex", justifySelf: "start" }}>
                    - Engine: M54B30 3.0L Inline 6 NA
                  </li>
                  <li style={{ display: "flex", justifySelf: "start" }}>
                    - Power: 228hp
                  </li>
                  <li style={{ display: "flex", justifySelf: "start" }}>
                    - Torque: 300nm
                  </li>
                  <li style={{ display: "flex", justifySelf: "start" }}>
                    - 0-60mph: 6.3s
                  </li>
                  <li style={{ display: "flex", justifySelf: "start" }}>
                    - Top Speed: 155mph
                  </li>
                  <li style={{ display: "flex", justifySelf: "start" }}>
                    - FR Layout
                  </li>
                </div>
              </InspectTxtCont>
            )}
            {whichProj === "Susp" && (
              <InspectTxtCont>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  April 2021
                </text>
                <text style={{ marginTop: "5px" }}>
                  Suspension Refresh/Upgrade
                </text>
                <div></div>
                <text style={{ marginTop: "5px" }}>(Stage 1.5)</text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  General
                </text>
                <text style={{ fontSize: "20px" }}>
                  With over 117k miles on the clock I decided to do a suspension
                  refresh for all parts and bushings that didn’t require removal
                  of the rear and front subframes. This was also driven from the
                  car clunking at the rear over bumps and the steering wheel
                  rattling under braking. I believed these to be the shocks and
                  bad front control arm bushings respectively. This would have
                  been the biggest project on a car I had undertaken to this
                  point and I was determined to be successful doing this all by
                  myself. My goal was to stick with OEM parts and decided to get
                  an upgraded spring kit (Eibach Pro Kit Lowering Springs )
                  which would lower the car by around 8-9mm on the front and
                  rear.
                </text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Parts
                </text>
                <div></div>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Bilstein B4 Shocks and Struts
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Eibach Pro Kit Lowering Springs
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Moog Front Control Arms
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Moog Sway Bar Links
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Lemforder Tie Rods (Inner and Outer)
                </li>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ fontSize: "20px" }}>
                  The Project went very smoothly and resulted in a much smoother
                  and dialed drive. The Stance of the car looked more aggressive
                  which I was very happy with.
                </text>
              </InspectTxtCont>
            )}
            {whichProj === "Ccan" && (
              <InspectTxtCont>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  June 2021
                </text>
                <text style={{ marginTop: "5px" }}>Catch Can Installation</text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  General
                </text>
                <text style={{ fontSize: "20px" }}>
                  High oil consumption is not a surprise on a high mileage
                  M54B30 Engine but I wanted to see if there was anyways to
                  minimise this. I learnt that the engineering of the oil
                  scraper ring on the pistons has an inferior design to its
                  predecessors and after enough wear they become less effective.
                  As rebuilding the engine and changing the rings was not an
                  option due to the car being my daily driver, my other option
                  was to increase the vacuum within the crankcase which was
                  considered a way to cause the oil ring to get sucked to the
                  cylinder wall and perform more efficiently. I used this as an
                  opportunity to delete the CCV system and install a custom
                  routing of vacuum lines out of the valve cover to the intake
                  manifold. This route would pass through a catch can to
                  separate the oil from the air and then through a PCV (positive
                  crankcase ventilation) valve which would control the vacuum
                  whilst acting as a check valve.
                </text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ fontSize: "20px" }}>
                  The project involved planning the custom route, removal of the
                  air box, DISA valve, throttle body to delete the CCV system
                  while allowing room to route the new vacuum hoses.
                </text>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "8px"
                  }}
                >
                  Parts
                </text>
                <div></div>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - 3 Port Mishimoto XL Catch Can
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Fram 345 PCV Valve
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - ¾ inch, ⅝ inch, ½ inch Vacuum Hose
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - ¾ inch to ½ inch Hose Adapter
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - ½ inch to ⅝ inch Hose Adapter
                </li>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "8px"
                  }}
                >
                  Results
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  The project was finished in 2 days and I was very pleased with
                  the tidy routing of the hoses. The oil consumption was
                  significantly lower since the installation, although a slight
                  smell of hot oil would occasionally be smelt in the cabin.
                  This was probably due to a small leak in the routing which I
                  never addressed due to the lack of time.
                </text>
              </InspectTxtCont>
            )}
            {whichProj === "Ms" && (
              <InspectTxtCont>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  Jan 2021
                </text>
                <div style={{ marginTop: "10px" }}></div>
                <text>Service of Accessory Belts and Tensioner Pulleys</text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ fontSize: "20px" }}>
                  I diagnosed a squealing in the engine bay as being a bad
                  bearing in a belt tensioner pulley. Whilst inspecting this, I
                  realised that my accessory belts were in very poor condition
                  and I decided to change the two belts and both tensioner
                  pulleys to avoid further problems. This was my first time
                  doing any belts and pulleys but it was an easy enough job and
                  took me the morning to complete.
                </text>
                <div style={{ marginTop: "6px" }}></div>
                <text style={{ fontSize: "20px" }}>
                  Oil change, replacement of spark plugs, oil filter, air filter
                  was also performed later in the year.
                </text>
              </InspectTxtCont>
            )}
            {whichProj === "Refurb" && (
              <InspectTxtCont style={{ backgroundColor: "black" }} />
            )}
            <CloseD onClick={() => this.props.toggleMenu()}>X</CloseD>
          </InspectCarContainerD>
        </CarProjSurround>

        <CarProjSurroundM>
          <InspectCarContainerM>
            <ProjDropDownE46 chooseProj={this.chooseProj} />
            <CloseM onClick={() => this.props.toggleMenu()}>x</CloseM>
            {whichProj === "Main" && (
              <>
                <InspectCarSS>
                  <Slider slides={E46MainS} />
                </InspectCarSS>
                <InspectTxtCont>
                  <div style={{ marginTop: "5px" }}>
                    <text style={{ marginTop: "5px" }}>
                      BMW 3 Series E46 330ci
                    </text>
                    <div></div>
                    <text style={{ display: "flex", justifySelf: "start" }}>
                      About
                    </text>
                    <div></div>
                    <text style={{ fontSize: "15px" }}>
                      The E46 model has remained an all time favourite of mine
                      from the timeless design, the pure driving experience
                      through to the joy of working on such an interestingly
                      engineered machine. To have the opportunity to own a 330ci
                      was so much fun and gave me the opportunity to engage in
                      many projects to make the car feel like my own. Although
                      short lived, the time with my E46 only increased my
                      passion for cars even further and I hope to convert an E46
                      to a track car in the future.
                    </text>
                  </div>
                  <div style={{ marginTop: "1%" }}>
                    <text style={{ display: "flex", justifySelf: "start" }}>
                      Stats
                    </text>
                    <li
                      style={{
                        display: "flex",
                        justifySelf: "start",
                        fontSize: "15px"
                      }}
                    >
                      - Engine: 3.0L Inline 6 NA
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifySelf: "start",
                        fontSize: "15px"
                      }}
                    >
                      - Power: 228hp
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifySelf: "start",
                        fontSize: "15px"
                      }}
                    >
                      - Torque: 300nm
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifySelf: "start",
                        fontSize: "15px"
                      }}
                    >
                      - 0-60mph: 6.3s
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifySelf: "start",
                        fontSize: "15px"
                      }}
                    >
                      - Top Speed: 155mph
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifySelf: "start",
                        fontSize: "15px"
                      }}
                    >
                      - FR Layout
                    </li>
                  </div>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "Susp" && (
              <>
                <InspectCarSS>
                  <Slider slides={E46SuspS} />
                </InspectCarSS>
                <InspectTxtCont>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "5px"
                    }}
                  >
                    April 2021
                  </text>
                  <text style={{ marginTop: "5px" }}>
                    Suspension Refresh/Upgrade
                  </text>
                  <div></div>
                  <text style={{ marginTop: "5px" }}>(Stage 1.5)</text>
                  <div style={{ marginTop: "10px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    General
                  </text>
                  <text style={{ fontSize: "15px" }}>
                    With over 117k miles on the clock I decided to do a
                    suspension refresh for all parts and bushings that didn’t
                    require removal of the rear and front subframes. This was
                    also driven from the car clunking at the rear over bumps and
                    the steering wheel rattling under braking. I believed these
                    to be the shocks and bad front control arm bushings
                    respectively. This would have been the biggest project on a
                    car I had undertaken to this point and I was determined to
                    be successful doing this all by myself. My goal was to stick
                    with OEM parts and decided to get an upgraded spring kit
                    (Eibach Pro Kit Lowering Springs ) which would lower the car
                    by around 8-9mm on the front and rear.
                  </text>
                  <div style={{ marginTop: "10px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Parts
                  </text>
                  <div></div>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Bilstein B4 Shocks and Struts
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Eibach Pro Kit Lowering Springs
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Moog Front Control Arms
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Moog Sway Bar Links
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Lemforder Tie Rods (Inner and Outer)
                  </li>
                  <div style={{ marginTop: "10px" }}></div>
                  <text style={{ fontSize: "15px" }}>
                    The Project went very smoothly and resulted in a much
                    smoother and dialed drive. The Stance of the car looked more
                    aggressive which I was very happy with.
                  </text>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "Ccan" && (
              <>
                <InspectCarSS>
                  <Slider slides={E46CCanS} />
                </InspectCarSS>
                <InspectTxtCont>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "5px"
                    }}
                  >
                    June 2021
                  </text>
                  <text style={{ marginTop: "5px" }}>
                    Catch Can Installation
                  </text>
                  <div style={{ marginTop: "10px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    General
                  </text>
                  <text style={{ fontSize: "15px" }}>
                    High oil consumption is not a surprise on a high mileage
                    M54B30 Engine but I wanted to see if there was anyways to
                    minimise this. I learnt that the engineering of the oil
                    scraper ring on the pistons has an inferior design to its
                    predecessors and after enough wear they become less
                    effective. As rebuilding the engine and changing the rings
                    was not an option due to the car being my daily driver, my
                    other option was to increase the vacuum within the crankcase
                    which was considered a way to cause the oil ring to get
                    sucked to the cylinder wall and perform more efficiently. I
                    used this as an opportunity to delete the CCV system and
                    install a custom routing of vacuum lines out of the valve
                    cover to the intake manifold. This route would pass through
                    a catch can to separate the oil from the air and then
                    through a PCV (positive crankcase ventilation) valve which
                    would control the vacuum whilst acting as a check valve.
                  </text>
                  <div style={{ marginTop: "10px" }}></div>
                  <text style={{ fontSize: "15px" }}>
                    The project involved planning the custom route, removal of
                    the air box, DISA valve, throttle body to delete the CCV
                    system while allowing room to route the new vacuum hoses.
                  </text>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "8px"
                    }}
                  >
                    Parts
                  </text>
                  <div></div>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - 3 Port Mishimoto XL Catch Can
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Fram 345 PCV Valve
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - ¾ inch, ⅝ inch, ½ inch Vacuum Hose
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - ¾ inch to ½ inch Hose Adapter
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - ½ inch to ⅝ inch Hose Adapter
                  </li>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "8px"
                    }}
                  >
                    Results
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    The project was finished in 2 days and I was very pleased
                    with the tidy routing of the hoses. The oil consumption was
                    significantly lower since the installation, although a
                    slight smell of hot oil would occasionally be smelt in the
                    cabin. This was probably due to a small leak in the routing
                    which I never addressed due to the lack of time.
                  </text>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "Ms" && (
              <InspectTxtCont style={{ height: "84%" }}>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  Jan 2021
                </text>
                <div
                  style={{
                    marginTop: "8px"
                  }}
                ></div>
                <text>Service of Accessory Belts and Tensioner Pulleys</text>
                <div style={{ marginTop: "5px" }}></div>
                <text style={{ fontSize: "15px" }}>
                  I diagnosed a squealing in the engine bay as being a bad
                  bearing in a belt tensioner pulley. Whilst inspecting this, I
                  realised that my accessory belts were in very poor condition
                  and I decided to change the two belts and both tensioner
                  pulleys to avoid further problems. This was my first time
                  doing any belts and pulleys but it was an easy enough job and
                  took me the morning to complete.
                </text>
                <div style={{ marginTop: "5px" }}></div>
                <text style={{ fontSize: "15px" }}>
                  Oil change, replacement of spark plugs, oil filter, air filter
                  was also performed later in the year.
                </text>
              </InspectTxtCont>
            )}
            {whichProj === "Refurb" && (
              <InspectCarSS style={{ backgroundColor: "black" }} />
            )}
          </InspectCarContainerM>
        </CarProjSurroundM>
      </>
    );
  }
}
