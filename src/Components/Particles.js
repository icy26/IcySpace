import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    document.body.style.margin = "0px";
    //document.body.style.marginBottom = "-1px";
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `100%`,
      height: `340vh`
    });
    //document.body
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        {...this.state}
        params={{
          background: {
            color: {
              value: "#000"
            }
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#FFF"
            },
            collisions: {
              enable: true
            },
            line_linked: {
              enable: false
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              value: 1.0,
              random: true
            },
            shape: {
              type: "circle"
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }}
      />
    );
  }
}

export default Canvas;
