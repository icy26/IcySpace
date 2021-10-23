import React from "react";
import { Space } from "./MainElements";
import Home from "components/pages/home";
import Projects from "components/pages/projects";
import About from "components/pages/about";
import Contact from "components/pages/contact";

const Main = () => {
  return (
    <>
      <Space>
        <div id="pad" />
        <Home />
        <Projects />
        <About />
        <Contact />
      </Space>
    </>
  );
};

export default Main;
