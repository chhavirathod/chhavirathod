import React from "react";
import chhavipic from "../assets/chhaviphoto.jpg";

export default function About() {
  return (
    <section
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 text-[#FDB5CE] bg-[#132440] relative rounded-3xl"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex justify-center md:justify-start">
            <img
              className="w-82 h-42 sm:w-60 sm:h-50 md:w-120 md:h-64 rounded-2xl object-cover border-2 border-[#3B9797] hover:border-[#FDB5CE] transition-colors"
              src={chhavipic}
              alt="Chhavi"
            />
          </div>

          <div className="text-white sm:text-lg md:text-xl leading-relaxed space-y-4">
            <p>
              I’m a Computer Science undergraduate from Mumbai, who loves to
              develop and create websites that make an impact through
              creativity and logic, with a hint of visually attractive user
              interface.
            </p>
            <p>
              Recently, I've been looking into the fascinating world of AI,
              exploring its potential to transform how we perceive and interact
              with technology.
            </p>
            <p>
              When I'm not coding, you can spot me in sports and fitness,
              finding inspiration for both my projects and personal health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
