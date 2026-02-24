import React from "react";
import catHead from "../assets/cathead.png";
import catTail from "../assets/cattail2.png";

export default function Nav() {
  return (
    <nav className="p-10 flex justify-center">
      <ul className="inline-flex border-2 rounded-full backdrop-blur-2xl text-zinc-200 px-6 relative overflow-visible">
        <li className="p-4 hover:font-semibold relative group">
          <img
            src={catHead}
            alt="cat head"
            className="absolute -top-7 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-10 h-7 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
          <a href="#home">Home</a>
          <img
            src={catTail}
            alt="cat tail"
            className="absolute -bottom-7 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-7 h-7 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
        </li>

        <li className="p-4 hover:font-semibold relative group">
          <img
            src={catHead}
            className="absolute -top-7 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-10 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
          <a href="#projects">Projects</a>
          <img
            src={catTail}
            className="absolute -bottom-7 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-7 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
        </li>

        <li className="p-4 hover:font-semibold relative group">
          <img
            src={catHead}
            className="absolute -top-7 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-10 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
          <a href="#about">About</a>
          <img
            src={catTail}
            className="absolute -bottom-7 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-7 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
        </li>

        <li className="p-4 hover:font-semibold relative group">
          <img
            src={catHead}
            className="absolute -top-7 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-10 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
          <a href="#skills">Skills</a>
          <img
            src={catTail}
            className="absolute -bottom-7 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-7 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
        </li>

        <li className="p-4 hover:font-semibold relative group">
          <img
            src={catHead}
            className="absolute -top-7 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-10 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
          <a href="#certificates">Certificates</a>
          <img
            src={catTail}
            className="absolute -bottom-7 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-7 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
        </li>

        <li className="p-4 hover:font-semibold relative group">
          <img
            src={catHead}
            className="absolute -top-7 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-10 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
          <a href="#contact">Contact</a>
          <img
            src={catTail}
            className="absolute -bottom-7 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-7 h-7 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
          />
        </li>
      </ul>
    </nav>
  );
}
