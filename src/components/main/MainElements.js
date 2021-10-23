import styled from "styled-components";

export const Space = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 340vh;
  border-bottom: 5px solid #000;
`;

export const Planet1 = styled.img`
  /*mobile*/
  position: absolute;
  top: 22%;
  margin-left: 4rem;
  height: 130px;
  width: 200px;

  animation-name: float;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  //margin-left: 30px;
  //margin-top: 5px;

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translate(20px, 0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }

  @media only screen and (min-width: 720px) {
    /*desktop*/
  }
`;
