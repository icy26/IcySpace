import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /*mobile*/
  position: fixed;
  width: 100%;
  height: 13vh;
  top: 0;
  left: 0;
  z-index: 2;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 25%;
    height: 100%;
  }
`;

export const NavMContainer = styled.button`
  /*mobile*/
  display: flex;
  background: transparent;
  border: none;
  position: absolute;
  top: 22px;
  right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

export const NavLogo = styled.img`
  /*mobile*/
  position: relative;
  width: 108px;
  height: 72px;
  margin: auto;
  top: 8px;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: relative;
    width: 150px;
    height: 100px;
    margin: auto;
    top: 40px;
  }
`;

export const NavDMenu = styled.div`
  /*mobile*/
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: block;
    position: relative;
    background: transparent;
    height: 36vh;
    top: 10vh;
    //border: 5px solid #02b83e;
  }
`;

export const NavDButton = styled(LinkS)`
  /*mobile*/
  display: none;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    display: flex;
    background: transparent;
    border: none;
    height: 25%;
    width: 100%;
    //border: 5px solid #7202b8;
    border: none;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    :hover {
      background-color: #000;
    }

    :active {
      background-color: #000;
    }
  }
`;
