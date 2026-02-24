import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwindcss from "../assets/tailwindcss.png";
import bootstrap from "../assets/bootstrap.png";
import cpp from "../assets/c++.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import node from "../assets/node.png";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-[#132440] text-[#FDB5CE]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My Skills
          </h2>
        </div>

        <div className="text-white/80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col items-center rounded-2xl border border-[#3B9797] shadow-lg shadow-black/40">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center p-4 sm:p-6">
              Web Development
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:gap-10 pb-6 sm:pb-8">
              <img
                src={html}
                alt="HTML"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={css}
                alt="CSS"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={tailwindcss}
                alt="Tailwind CSS"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={bootstrap}
                alt="Bootstrap"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col items-center  rounded-2xl border border-[#3B9797] shadow-lg shadow-black/40">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center p-4 sm:p-6">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:gap-10 pb-6 sm:pb-8">
              <img
                src={cpp}
                alt="C++"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={java}
                alt="Java"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={javascript}
                alt="JavaScript"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={python}
                alt="Python"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-[#3B9797] shadow-lg shadow-black/40">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center p-4 sm:p-6">
              Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:gap-10 pb-6 sm:pb-8">
              <img
                src={react}
                alt="React"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={vite}
                alt="Vite"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={node}
                alt="Node.js"
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
