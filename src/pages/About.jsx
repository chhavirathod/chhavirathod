import React from "react";
import chhavipic from "../assets/chhaviphoto.jpg";

export default function About() {
  return (
    <section className="p-6   text-white relative border-black rounded-3xl" id="about">
      <div className="flex justify-center text-4xl">
        <b>About Me</b>
      </div>
      <div className="mt-9 pt-2">
        <div className="flex justify-center pt-6">
          <img className="h-90 rounded-xl hover:border-white" src={chhavipic} alt="Chhavi" />
        </div>
        <div className="text-2xl p-10">
          <p>
            I’m a Computer Science undergraduate from Mumbai, who loves to develop and create websites that make an impact through creativity and logic, with a hint of visually attractive user interface.
          </p>
          <br />
          <p>
            Recently, I've been looking into the fascinating world of AI, exploring its potential to transform how we perceive and interact with technology.
          </p>
          <br />
          <p>
            When I'm not coding, you can spot me in sports and fitness, finding inspiration for both my projects and personal health.
          </p>
        </div>
      </div>
    </section>
  );
}
