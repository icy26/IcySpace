import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProjectContainer = styled.div`
  /*mobile*/
  position: relative;
  top: 90px;
  left: 0px;
  //border: 5px solid #3324ff;
  //background-color: transparent;
  height: 88vh;
  width: auto;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: relative;
    top: 0;
    left: 25%;
    //border: 5px solid #3324ff;
    //background-color: transparent;
    height: 100vh;
    width: 75%;
  }
`;

export const H3ader = styled.div`
  /*mobile*/
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding-top: 8vh;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding-top: 14vh;
  }
`;

export const ProjectChooser = styled.div`
  /*mobile*/
  position: absolute;
  display: flex;
  height: 40%;
  width: 90vw;
  left: 5%;
  top: 25%;

  //border: 5px solid #3324ff;
  z-index: 2;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    height: 48%;
    width: 40vw;
    left: 23%;
    top: 30%;

    //border: 5px solid #3324ff;
  }
`;

export const Selectors = styled(LinkR)`
  /*mobile*/
  border: 2px solid #fff;
  width: 50%;
  height: 100%;
  overflow: hidden;
  margin-left: 2px;
  margin-right: 2px;
  transition: transform 0.5s;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 50%;
    height: 100%;
    overflow: hidden;
    margin-left: 8px;
    margin-right: 8px;
    transition: transform 0.5s; /* Animation */
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const SelectHead = styled.p`
  position: absolute;
  top: 50;
  left: 38%;
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

export const Codepic = styled.img`
  /*Mobile*/
  position: relative;
  height: 100%;
  width: auto;
  margin-left: -30px;
`;

export const Carpic = styled.img`
  /*Mobile*/
  position: relative;
  height: 120%;
  width: auto;
  margin-left: -10px;
`;

export const Otherpic = styled.img`
  /*Mobile*/
  position: relative;
  height: 120%;
  width: auto;
  margin-left: -80px;
`;

export const Grad = styled.div`
  position: absolute;
  background: #000000;
  background: -moz-linear-gradient(top, #000000 0%, #561151 100%);
  background: -webkit-linear-gradient(top, #000000 0%, #561151 100%);
  background: linear-gradient(to bottom, #000000 0%, #561151 100%);
  height: 20vh;
  width: 100%;
  bottom: 0;
`;

export const Pad = styled.div`
  position: absolute;
  bottom: 13vh;
  //height: 10px;
  //width: 100px;
  //background: #FFF;
`;
