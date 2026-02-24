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
    <section id="skills" className="min-h-screen p-6 bg-black text-white">
      <div className="flex justify-center text-4xl mb-12">
        <b>My Skills</b>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <div className="flex flex-col items-center bg-zinc-900 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-center p-6">Web Development</h3>
          <div className="grid grid-cols-2 gap-12 pb-8">
            <img src={html} alt="HTML" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={css} alt="CSS" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={tailwindcss} alt="Tailwind CSS" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={bootstrap} alt="Bootstrap" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="flex flex-col items-center bg-zinc-900 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-center p-6">Languages</h3>
          <div className="grid grid-cols-2 gap-12 pb-8">
            <img src={cpp} alt="C++" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={java} alt="Java" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={javascript} alt="JavaScript" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={python} alt="Python" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="flex flex-col items-center bg-zinc-900 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-center p-6">Frameworks</h3>
          <div className="grid grid-cols-2 gap-12 pb-8">
            <img src={react} alt="React" className="w-19 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={vite} alt="Vite" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
            <img src={node} alt="Node.js" className="w-19 h-16 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
