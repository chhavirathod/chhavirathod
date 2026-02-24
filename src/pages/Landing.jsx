import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";

export default function Landing() {
  return (
    <div>
      <Home />
      <Projects />
      <About />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}
