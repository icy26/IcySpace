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
import ProjDropDownFez from "./ProjDropDownFez";
import { Slider } from "components/proj/slides/Slider";
import FezMainS from "components/proj/slides/carSlides/FezMainS";
import Coil from "components/images/cars/fez/FezCoil.jpg";
import Fender from "components/images/cars/fez/FezFender.jpg";
import FezBWR from "components/proj/slides/carSlides/fezBW";

export default class InspectProjFez extends React.Component {
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
                  <Slider slides={FezMainS} />
                </InspectCarSS>
              )}
              {whichProj === "Coil" && (
                <InspectCarSS>
                  <img
                    src={Coil}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </InspectCarSS>
              )}
              {whichProj === "Fender" && (
                <InspectCarSS>
                  <img
                    src={Fender}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </InspectCarSS>
              )}{" "}
              {whichProj === "BWR" && (
                <InspectCarSS>
                  <Slider slides={FezBWR} />
                </InspectCarSS>
              )}
              <CarProjChooser>
                <InspectOptions onClick={() => this.chooseProj("Main")}>
                  MAIN
                </InspectOptions>
                <InspectOptions onClick={() => this.chooseProj("Coil")}>
                  COIL SPRING & FRONT CONTROL ARM REPLACEMENT
                </InspectOptions>
                <InspectOptions onClick={() => this.chooseProj("Fender")}>
                  FRONT FENDER REPLACEMENT
                </InspectOptions>
                <InspectOptions onClick={() => this.chooseProj("BWR")}>
                  BODY WORK REPAIR
                </InspectOptions>
              </CarProjChooser>
            </InspectCarL>
            {whichProj === "Main" && (
              <InspectTxtCont>
                <text style={{ marginTop: "5px" }}>Ford Fiesta 1.25 Zetec</text>
                <div></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  About
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  Introducing my first ever car. It was a 1.25L petrol Ford
                  Fiesta and was a great little runner. I owned it for around 1
                  ½ years and it served very well. It may have not been anything
                  special but I will always look at it with good memories.
                </text>
                <div style={{ marginTop: "1%" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Stats
                </text>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Engine: 1.25L four-cylinder
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Power: 78hp
                </li>
                <li style={{ display: "flex", justifySelf: "start" }}>
                  - Layout: FF
                </li>
              </InspectTxtCont>
            )}
            {whichProj === "Coil" && (
              <InspectTxtCont>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  May 2020
                </text>
                <div style={{ marginTop: "10px" }}></div>
                <text>Coil Spring & Front Control Arm Replacement</text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Diagnosis
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  A very shaky ride in the Fiesta led me to find that the front
                  right control arm bushing was completely worn. As well as this
                  during a drive I heard a clunk from the front. When I pulled
                  over I found a part of the coil (spring) had snapped off and
                  was lying in the road. It made sense to do both jobs at the
                  same time as they were both on the same side.
                </text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Job
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  This was the first suspension work I had ever done on a car
                  and it turned out to be a challenge due to not having a ball
                  joint separator tool for removing the control arm. Some brute
                  force with a crowbar, heavy hammer and some other tools soon
                  did the trick.
                </text>
                <div style={{ marginTop: "10px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Job
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  Overall the job prepared for my future suspension refresh job
                  I performed on the E46 and was great fun. I was able to
                  eliminate the shaking and the ride went back to being very
                  comfortable.
                </text>
              </InspectTxtCont>
            )}
            {whichProj === "Fender" && (
              <InspectTxtCont>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  July 2020
                </text>
                <div style={{ marginTop: "8px" }}></div>
                <text>Fender Replacement</text>
                <div style={{ marginTop: "8px" }}></div>
                <text style={{ fontSize: "20px" }}>
                  An unfortunate turn of events led me to needing a replacement
                  front left fender panel. As I do all the work on cars myself,
                  I took this as an opportunity to undertake another task and
                  save a bit of money over going to a garage. I purchased a used
                  fender panel from eBay with matching paint code and got to
                  work.
                </text>
                <div style={{ marginTop: "8px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Job
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  The job required access to the bolts above the wheel arch and
                  behind the bumper so I gained access to this by taking the
                  bumper off and removing the wheel and wheel arch dirt guards.
                  The only problem I faced was a small bolt located behind the
                  little glass panel about 3 inches into the chassis which was
                  almost impossible to get to. Although it was a struggle I was
                  able to complete the task and fit the new fender making the
                  car look good as new.
                </text>
              </InspectTxtCont>
            )}
            {whichProj === "BWR" && (
              <InspectTxtCont>
                <text
                  style={{
                    display: "flex",
                    justifySelf: "start",
                    marginTop: "5px"
                  }}
                >
                  Nov 2020
                </text>
                <div style={{ marginTop: "8px" }}></div>
                <text>Body Work Repair and Respray</text>
                <div style={{ marginTop: "8px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Intro
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  The time had come to part ways with my first car, but I
                  decided to embark with one last project which would also
                  result in getting the best price during my sale. The car had
                  minor damage on the bumper, mainly cracks and scratches, and
                  it was a great opportunity to get body work repair and respray
                  experience. As I do not have a spray paint gun I planned on
                  using aerosol spray paint to execute this.
                </text>
                <div style={{ marginTop: "8px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Job
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  I aligned cracks by drilling holes in the bumper and using
                  locking wire/zip ties to obtain the shape. Body filler was
                  used to fill in cracks where I then sanded down the areas
                  ready for the surface to get prepped. I wet and dry sanded the
                  surface from 150 - 2000 grit and then primed the surface.
                  Three coats of Ford Panther Black were sprayed to the body and
                  lacquer was applied on top. I then colour cut and polished the
                  surface as the final touch.
                </text>
                <div style={{ marginTop: "8px" }}></div>
                <text style={{ display: "flex", justifySelf: "start" }}>
                  Results
                </text>
                <div></div>
                <text style={{ fontSize: "20px" }}>
                  I was very impressed with the finish of the job. The original
                  damage was not noticable and the paint work blended with the
                  original very well. Of course I did not achieve that glass
                  like finish seen from the stock paint work and when looking
                  closely the distinction can be made. However, for my first
                  time with aerosols I was very pleased with the results and it
                  most definitely helped me get my target price during my sale.{" "}
                </text>
              </InspectTxtCont>
            )}
            <CloseD onClick={() => this.props.toggleMenu()}>X</CloseD>
          </InspectCarContainerD>
        </CarProjSurround>

        <CarProjSurroundM>
          <InspectCarContainerM>
            <ProjDropDownFez chooseProj={this.chooseProj} />
            <CloseM onClick={() => this.props.toggleMenu()}>x</CloseM>
            {whichProj === "Main" && (
              <>
                <InspectCarSS>
                  <Slider slides={FezMainS} />
                </InspectCarSS>
                <InspectTxtCont>
                  <div style={{ marginTop: "5px" }}></div>
                  <text>Ford Fiesta 1.25 Zetec</text>
                  <div></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    About
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    Introducing my first ever car. It was a 1.25L petrol Ford
                    Fiesta and was a great little runner. I owned it for around
                    1 ½ years and it served very well. It may have not been
                    anything special but I will always look at it with good
                    memories.
                  </text>
                  <div style={{ marginTop: "1%" }}></div>
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
                    - Engine: 1.25L four-cylinder
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Power: 78hp
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      fontSize: "15px"
                    }}
                  >
                    - Layout: FF
                  </li>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "Coil" && (
              <>
                <InspectCarSS>
                  <img
                    src={Coil}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </InspectCarSS>
                <InspectTxtCont>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "5px"
                    }}
                  >
                    May 2020
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text>Coil Spring & Front Control Arm Replacement</text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Diagnosis
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    A very shaky ride in the Fiesta led me to find that the
                    front right control arm bushing was completely worn. As well
                    as this during a drive I heard a clunk from the front. When
                    I pulled over I found a part of the coil (spring) had
                    snapped off and was lying in the road. It made sense to do
                    both jobs at the same time as they were both on the same
                    side.
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Job
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    This was the first suspension work I had ever done on a car
                    and it turned out to be a challenge due to not having a ball
                    joint separator tool for removing the control arm. Some
                    brute force with a crowbar, heavy hammer and some other
                    tools soon did the trick.
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Reults
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    Overall the job prepared for my future suspension refresh
                    job I performed on the E46 and was great fun. I was able to
                    eliminate the shaking and the ride went back to being very
                    comfortable.
                  </text>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "Fender" && (
              <>
                <InspectCarSS>
                  <img
                    src={Fender}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </InspectCarSS>
                <InspectTxtCont>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "5px"
                    }}
                  >
                    July 2020
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text>Fender Replacement</text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ fontSize: "15px" }}>
                    An unfortunate turn of events led me to needing a
                    replacement front left fender panel. As I do all the work on
                    cars myself, I took this as an opportunity to undertake
                    another task and save a bit of money over going to a garage.
                    I purchased a used fender panel from eBay with matching
                    paint code and got to work.
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Job
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    The job required access to the bolts above the wheel arch
                    and behind the bumper so I gained access to this by taking
                    the bumper off and removing the wheel and wheel arch dirt
                    guards. The only problem I faced was a small bolt located
                    behind the little glass panel about 3 inches into the
                    chassis which was almost impossible to get to. Although it
                    was a struggle I was able to complete the task and fit the
                    new fender making the car look good as new.
                  </text>
                </InspectTxtCont>
              </>
            )}
            {whichProj === "BWR" && (
              <>
                <InspectCarSS>
                  <Slider slides={FezBWR} />
                </InspectCarSS>
                <InspectTxtCont>
                  <text
                    style={{
                      display: "flex",
                      justifySelf: "start",
                      marginTop: "5px"
                    }}
                  >
                    Nov 2020
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text>Body Work Repair and Respray</text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Intro
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    The time had come to part ways with my first car, but I
                    decided to embark with one last project which would also
                    result in getting the best price during my sale. The car had
                    minor damage on the bumper, mainly cracks and scratches, and
                    it was a great opportunity to get body work repair and
                    respray experience. As I do not have a spray paint gun I
                    planned on using aerosol spray paint to execute this.
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Job
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    I aligned cracks by drilling holes in the bumper and using
                    locking wire/zip ties to obtain the shape. Body filler was
                    used to fill in cracks where I then sanded down the areas
                    ready for the surface to get prepped. I wet and dry sanded
                    the surface from 150 - 2000 grit and then primed the
                    surface. Three coats of Ford Panther Black were sprayed to
                    the body and lacquer was applied on top. I then colour cut
                    and polished the surface as the final touch.
                  </text>
                  <div style={{ marginTop: "8px" }}></div>
                  <text style={{ display: "flex", justifySelf: "start" }}>
                    Results
                  </text>
                  <div></div>
                  <text style={{ fontSize: "15px" }}>
                    I was very impressed with the finish of the job. The
                    original damage was not noticable and the paint work blended
                    with the original very well. Of course I did not achieve
                    that glass like finish seen from the stock paint work and
                    when looking closely the distinction can be made. However,
                    for my first time with aerosols I was very pleased with the
                    results and it most definitely helped me get my target price
                    during my sale.
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
