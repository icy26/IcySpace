import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HomeContainer = styled.div`
  /*mobile*/
  position: relative;
  top: 90px;
  left: 0px;
  //border: 5px solid #ff0d0d;
  background-color: transparent;
  height: 88vh;
  width: auto;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: relative;
    top: 0;
    left: 25%;
    //border: 5px solid #ff0d0d;
    background-color: transparent;
    height: 100vh;
    width: 74%;
  }
`;

export const Welcome = styled.div`
  /*mobile*/
  //position: relative;
  color: white;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Explore = styled.button`
  /*mobile*/
  background-color: #927ea6;
  border: none;
  border-radius: 30px;
  height: 6%;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 50px;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    height: 8%;
    font-size: 24px;
    padding-left: 22px;
    padding-right: 22px;
    margin-top: 100px;
  }

  :hover {
    color: white;
    background-color: #31174a;
  }
`;

export const Pad = styled.div`
  position: absolute;
  bottom: 13vh;
  //height: 10px;
  //width: 100px;
  //background: #FFF;
`;

export const ExpM = styled(LinkS)`
  display: block;
  background-color: #927ea6;
  border: none;
  //border: 2px solid red;
  border-radius: 30px;
  width: 50vw;
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 50px;
  margin-left: 23vw;
  cursor: pointer;

  @media only screen and (min-width: 720px) {
    display: none;
  }

  :hover {
    color: white;
    background-color: #31174a;
  }
`;

export const ExpD = styled(LinkS)`
  display: none;

  @media only screen and (min-width: 720px) {
    display: block;
    background-color: #927ea6;
    border: none;
    border-radius: 30px;
    width: 20%;
    padding: 8px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 12vh;
    margin-left: 29vw;
    cursor: pointer;
  }

  :hover {
    color: white;
    background-color: #31174a;
  }
`;
