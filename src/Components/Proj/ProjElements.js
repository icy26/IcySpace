import styled from "styled-components";

export const Space = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 340vh;
  border-bottom: 5px solid #000;
`;

export const CloseM = styled.button`
  position: absolute;
  top: 1.5vh;
  left: 1.5vh;
  height: 5vh;
  width: 5vh;
  border-radius: 50px;
  border: 3px solid black;
  background: white;
  font-weight: 800;
  padding-bottom: 0.5vh;
  cursor: pointer;

  :hover {
    background-color: #ff5a5a;
  }
`;
export const CloseD = styled.button`
  position: absolute;
  top: 1.5vh;
  right: 1.5vh;
  height: 5vh;
  width: 5vh;
  border-radius: 50px;
  border: 3px solid black;
  background: white;
  font-weight: 800;
  padding-bottom: 0.5vh;
  cursor: pointer;

  :hover {
    background-color: #ff5a5a;
  }
`;
