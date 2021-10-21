import React from "react";
import { Space } from "./MainElements";
import Home from "/src/Components/Pages/Home";
import Projects from "/src/Components/Pages/Projects";
import About from "/src/Components/Pages/About";
import Contact from "/src/Components/Pages/Contact";
//import planet from "/src/Components/Images/planet.png";

const Main = () => {
  return (
    <>
      <Space>
        <div
          id="pad" /*style={{height: '10px', border: '5px solid #e46eff'}}*/
        ></div>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Space>
    </>
  );
};

export default Main;
