import styled from "styled-components";

export const ContactContainer = styled.div`
  /*mobile*/
  position: relative;
  top: 90px;
  left: 0px;
  //border: 5px solid #ffcc00;
  background-color: transparent;
  height: 40vh;
  width: auto;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: relative;
    top: 0;
    left: 25%;
    //border: 5px solid #ffcc00;
    background-color: transparent;
    height: 40vh;
    width: 75%;
  }
`;

export const Temp = styled.div`
  /*mobile*/
  //position: relative;
  color: white;
  font-size: 20px;
  font-weight: bold;
  //border: 1px solid #ffcc00;
  height: 10vh;

  @media only screen and (min-width: 720px) {
    color: white;
    font-size: 24px;
    font-weight: bold;
    /*desktop*/
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
    padding-top: 0;
  }
`;

export const SocialsCont = styled.div`
  /*mobile*/
  //border: 1px solid #ffcc00;
  height: 100%;
  width: 100%;
  //margin-top: 3vh;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    //border: 1px solid #ffcc00;
    height: 90%;
  }
`;

export const Social = styled.div`
  /*mobile*/
  //border: 1px solid red;
  height: 25%;
  margin-left: 8vw;
  margin-right: 8vw;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    //border: 1px solid red;
  }
`;

export const SocialLogo = styled.img`
  /*mobile*/
  width: 20%;
  height: 80%;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 6.5%;
    height: 70%;
  }
`;

export const SocialDeets = styled.text`
  color: white;
  margin-left: 5vw;
  font-size: 16px;
  font-weight: bold;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    margin-left: 4vw;
    font-size: 20px;
  }
`;
