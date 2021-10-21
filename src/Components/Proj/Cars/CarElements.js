import styled from "styled-components";

export const FullCont = styled.div`
  /*mobile*/
  display: flex;
  height: 88%;
  margin-top: 13vh;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    margin-top: 2vh;
    margin-left: 25%;
    width: 74%;
  }
`;

export const LeftD = styled.div`
  /*mobile*/
  height: 100%;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    width: 50%;
  }
`;
export const RightD = styled.div`
  /*mobile*/
  display: none;
  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    width: 50%;
    //border: 5px solid #ff00a2;
  }
`;
export const CCimg = styled.img`
  position: absolute;
  display: block;
  height: auto;
  width: 100%;
  left: 0;
  margin-top: -15px;

  @media only screen and (min-width: 720px) {
    margin-top: -38px;
  }
`;

export const Blanket = styled.div`
  position: absolute;
  top: -1vh;
  left: 0;
  display: block;
  height: 110%;
  width: 102%;

  @media only screen and (min-width: 720px) {
    position: absolute;
    top: -1vh;
    display: block;
    height: 110%;
    width: 100%;
  }
`;

export const CarLabel = styled.h1`
  display: block;
  color: black;
  font-size: 24px;
  font-weight: 1000;
  height: 100%;
  width: 100%;
  margin-top: 8vh;

  @media only screen and (min-width: 720px) {
    font-size: 34px;
    margin-top: 12vh;
  }
`;

export const ContainerCars = styled.button`
  display: flex;
  position: relative;
  height: 20vh;
  width: 86vw;
  margin-top: 3vh;
  //margin-bottom: 2vh;
  left: 6.5vw;
  border: none;
  border-radius: 50px;
  transition: transform 0.2s;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 720px) {
    //top: 2vh;
    left: 1.5vw;
    height: 28vh;
    width: 95%;
    border-radius: 80px;
    background: transparent;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export const PassionCont = styled.div`
  /*mobile*/
  position: fixed;
  display: block;
  height: 86vh;
  width: 100vw;
  background-color: #fffbed;
  bottom: 0;
  border-radius: 24px 24px 0px 0px;
  font-weight: bold;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    right: 0;
    height: 100vh;
    width: 36vw;
    border-radius: 60px 0px 0px 60px;
    overflow: hidden;
    z-index: 1;
  }
`;

export const PassionHead = styled.div`
  color: black;
  font-size: 18px;

  @media only screen and (min-width: 720px) {
    margin-top: 3%;
    font-size: 28px;
  }
`;

export const PassionText = styled.div`
  margin: auto;
  height: 42%;
  width: 92%;
  overflow: scroll;

  @media only screen and (min-width: 720px) {
    height: 50%;
    width: 80%;
  }
`;

export const PassionPicCont = styled.div`
  //border: 2px solid blue;
  height: 16.8rem;
  width: 16rem;
  margin: auto;
  margin-top: 0.6rem;
  border-radius: 40px;
  overflow: hidden;

  @media only screen and (min-width: 720px) {
    height: 19rem;
    width: 18.2rem;
    margin-top: 1.5rem;
  }
`;

export const PassionPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InspectCarContainerD = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: absolute;
    display: flex;
    height: 86vh;
    width: 68vw;
    left: 3vw;
    top: 6vh;
    //border: 5px solid #e6c65a;
    background-color: #fffbed;
    border-radius: 30px;
    z-index: 3;
    overflow: hidden;
  }
`;

export const InspectCarL = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    height: 100%;
    width: 46%;
    //border: 5px solid #4287f5;
  }
`;

export const InspectCarSS = styled.div`
  display: flex;
  height: 35%;
  width: 100%;
  background-color: #7a7a7a;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: flex;
    height: 40%;
    width: 100%;
    //border: 5px solid #4287f5;
    background-color: #7a7a7a;
  }
`;

export const CarProjChooser = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    height: 60%;
    width: 100%;
    //border: 5px solid #4287f5;
    background-color: #fffbed;
    //background-color: #ced4de;
    //overflow: hidden;
    overflow: auto;
  }
`;

export const InspectOptions = styled.button`
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: Block;
    height: 22%;
    width: 100%;
    //border: 5px solid #11ed1f;
    background: transparent;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }

  :hover {
    background-color: #9da4ad;
  }
`;

export const InspectTxtCont = styled.div`
  //display: block;
  margin-top: 2%;
  height: 50%;
  width: 96%;
  //border: 1px solid #11ed1f;
  //background-color: black;
  font-size: 16px;
  font-weight: bold;
  overflow: auto;
  padding-left: 2%;
  padding-right: 2%;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    height: 95%;
    width: 54%;
    //border: 5px solid #11ed1f;
    background: #fffbed;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Close = styled.button`
  display: flex;
  margin-left: -5vw;
  margin-top: -1.2vh;
  height: 66px;
  width: 66px;
  border: 5px solid #000;
  border-radius: 30px 14px 14px 14px;
  background: transparent;
  justify-content: center;
  align-items: center;
  //z-index: 2;
  font-size: 24px;
  font-weight: bold;
  padding-top: 6px;
  cursor: pointer;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: absolute;
    right: 0;
    margin-right: -1vh;
    top: 0;
    height: 58px;
    width: 60px;
    border: 5px solid #000;
    border-radius: 14px 30px 14px 14px;
    background: transparent;
    justify-content: center;
    align-items: center;
    z-index: 2;
    font-size: 24px;
    font-weight: bold;
    padding-top: 6px;
  }
`;

export const InspectOptionBar = styled.button`
  display: flex;
  height: 12%;
  width: 100%;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  //background-color: #4287f5;
  //border: 2px solid #11ed1f;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: none;
  }
`;

export const PopPassion = styled.button`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background-color: #fffbed;
  border: none;
  border-radius: 24px 24px 0px 0px;
  justify-content: center;
  font-size: 16px;
  font-weight: 1000;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: none;
  }
`;

export const CarProjSurround = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: flex;
    position: fixed;
    left: 25vw;
    top: 0;
    height: 100vh;
    width: 75vw;
    z-index: 2;
  }
`;

export const CarProjSurroundM = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 13vh;
  height: 87vh;
  width: 100vw;
  //border: 2px solid #e6c65a;
  z-index: 2;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: none;
  }
`;

export const InspectCarContainerM = styled.div`
  display: block;
  position: absolute;
  height: 72vh;
  width: 90vw;
  top: 2vh;
  left: 5vw;
  //border: 5px solid #e6c65a;
  background-color: #fffbed;
  border-radius: 28px;
  z-index: 2;
  overflow: hidden;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: none;
  }
`;

export const DropSurroundM = styled.div`
  display: flex;
  position: absolute;
  height: 90%;
  width: 100%;
  //border: 2px solid #e6c65a;
  z-index: 3;
`;

export const DropCont = styled.div`
  display: block;
  height: 80%;
  width: 100%;
  overflow: auto;
  //border: 3px solid #e6c65a;
`;

export const DropOptions = styled.button`
  display: flex;
  height: 25%;
  width: 100%;
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;

  :hover {
    background-color: white;
  }
`;
