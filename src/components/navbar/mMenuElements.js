import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  position: absolute;
  height: 86vh;
  width: 100%;
  //border: 2px solid #ff0d0d;
  //background-color: #000;
  top: 13vh;

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

export const Block = styled.div`
  position: absolute;
  height: 66vh;
  width: 100%;
`;

export const Text = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  //border-bottom: 3px ridge #220456;
  height: 25%;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #000;
  }
`;
