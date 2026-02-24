import React, { useEffect } from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";

export default function Landing() {

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    if (!panels || panels.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    panels.forEach((p) => observer.observe(p));

    return () => observer.disconnect();
  }, []);

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
