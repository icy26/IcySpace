import styled from "styled-components";

export const ContainerM = styled.div`
  /*mobile*/
  display: flex;
  height: 8rem;
  /* border: 5px solid #fc1100; */

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

export const LargeFull = styled.div`
  position: fixed;
  top: 13vh;
  left: 0;
  height: 87vh;
  width: 99vw;
  z-index: 1;
  //border: 1px solid #fc1100;
  //background-color: white;

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;
export const Large = styled.div`
  position: relative;
  height: 82vh;
  width: 92vw;
  top: 2vh;
  left: 2.8vw;
  border: 4px solid white;
  border-radius: 34px;

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

export const TxtM = styled.div`
  display: block;
  position: absolute;
  height: 62%;
  width: 100%;
  bottom: 0;
  border-radius: 0px 0px 30px 30px;
  //background-color: #fffbed;
  //border: 2px solid black;
  overflow: scroll;

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

// export const TheTxtM = styled.text`
//   margin-top: 2px;
//   display: flex;
//   width: 100%;

//   @media only screen and (min-width: 720px) {
//     display: none;
//   }
// `

export const SlideM = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 38%;
  width: 100%;
  border-radius: 30px 30px 0px 0px;
  //border: 5px solid #72a0c1;
  overflow: hidden;

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

export const ContainerD = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    display: flex;
    position: relative;
    margin-top: 7vh;
    left: 28%;
    height: 32vh;
    width: 68%;
    border-radius: 35px;
    border: 5px solid white;
    transition: transform 0.2s;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export const SlideD = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    display: flex;
    position: relative;
    height: 100%;
    width: 44%;
    overflow: hidden;
    //border: 5px solid #72a0c1;
  }
`;

export const TxtD = styled.div`
  display: none;

  @media only screen and (min-width: 720px) {
    display: block;
    position: relative;
    right: 0;
    height: 100%;
    width: 56%;
    border-radius: 0px 30px 30px 0px;
    //background-color: #fffbed;
    //border: 5px solid #72a0c1;
    overflow: scroll;
  }
`;

export const InsButton = styled.button`
  /*mobile*/
  position: relative;
  height: 100%;
  width: 42%;
  margin-left: 4%;
  margin-right: 4%;
  background: transparent;
  /* border: none; */
  border: 4px solid #72a0c1;
  border-radius: 20px;
  overflow: hidden;

  :hover {
    border: 4px solid #003c64;
  }
`;

export const ImgM = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
