import React from "react";
import { FaBars } from "react-icons/fa";
import { Container, Block, Text } from "./mMenuElements";
import { NavMContainer } from "./NavbarElements";

export default class NavMButton extends React.Component {
  state = {
    isToggled: false
  };

  toggleMenu() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    const isToggled = this.state.isToggled;

    return (
      <>
        <NavMContainer onClick={() => this.toggleMenu()}>
          <FaBars />
        </NavMContainer>
        {isToggled && (
          <Container onClick={() => this.toggleMenu()}>
            <Block style={{ backgroundColor: "rgba(30,20,30,0.96" }}>
              <Text
                to="pad"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={() => this.toggleMenu()}
              >
                HOME
              </Text>
              <Text
                to="projectsM"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => this.toggleMenu()}
              >
                PROJECTS
              </Text>
              <Text
                to="aboutM"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => this.toggleMenu()}
              >
                ABOUT
              </Text>
              <Text
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={() => this.toggleMenu()}
              >
                CONTACT
              </Text>
            </Block>
          </Container>
        )}
      </>
    );
  }
}
