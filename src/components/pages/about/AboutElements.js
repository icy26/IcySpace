import styled from "styled-components";

export const AboutContainer = styled.div`
  /*mobile*/
  position: relative;
  top: 90px;
  left: 0px;
  //border: 5px solid #e46eff;
  //background-color: #561151;
  height: 88vh;
  width: auto;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: relative;
    top: 0;
    left: 25%;
    //border: 1px solid #e46eff;
    //background-color: #21133a;
    //background-color: transparent;
    height: 100vh;
    width: 75%;
  }
`;

export const H3ad = styled.header`
  /*mobile*/
  //position: absolute;
  //left: 20vw;
  //top: 8%;
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

export const He4d = styled.div`
  /*mobile*/
  position: absolute;
  width: 100vw;
  text-align: center;
  top: 10vh;
  color: white;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 75vw;
    text-align: center;
    top: 10vh;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const TxtContain = styled.div`
  /*mobile*/
  position: absolute;
  height: 66vh;
  width: 86%;
  top: 16vh;
  left: 6vw;
  //background-color: #FFF;
  border: 4px ridge #fff;
  border-radius: 20px;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    height: 68vh;
    width: 50%;
    left: 4vw;
    margin: auto;
    top: 18vh;
  }
`;

export const Grad2 = styled.div`
  position: absolute;
  background: #000000;
  background: -moz-linear-gradient(bottom, #000000 0%, #561151 100%);
  background: -webkit-linear-gradient(bottom, #000000 0%, #561151 100%);
  background: linear-gradient(to top, #000000 0%, #561151 100%);
  //margin-top: -1px;
  height: 20vh;
  width: 100%;
  //bottom: 0;
`;

export const TxtM = styled.div`
  height: 96%;
  margin-top: 3%;
  margin-left: 2%;
  text-align: left;
  color: white;
  overflow: scroll;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: none;
  }
`;

export const TxtD = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    height: 96%;
    margin-top: 3%;
    margin-left: 2%;
    text-align: left;
    color: white;
    overflow: scroll;
    font-size: 18px;
  }
`;
