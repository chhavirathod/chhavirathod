import React, { useState } from "react";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { ReactTyped } from "react-typed";
import chhavipic from "./assets/chhaviphoto.jpg";
import bootstrap from "./assets/bootstrap.png";
import cpp from "./assets/c++.png";
import canva from "./assets/canva.png";
import css from "./assets/css.png";
import figma from "./assets/figma.png";
import github from "./assets/github.png";
import html from "./assets/html.png";
import java from "./assets/java.png";
import javascript from "./assets/javascript.png";
import mongodb from "./assets/mongodb.png";
import node from "./assets/node.png";
import python from "./assets/python.png";
import react from "./assets/react.png";
import sql from "./assets/sql.png";
import tailwindcss from "./assets/tailwindcss.png";
import vite from "./assets/vite.png";
import dholera from "./assets/dholeraProj.png";
import finfraud from "./assets/finFraud.png";
import artifacts from "./assets/artifacts.png";
import BackgroundGradientAnimation from "@/components/ui/background-gradient-animation";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <nav className="p-4">
          <ul className="flex border-2 rounded-3xl  lg:mx-4 justify-around text-zinc-200 ">
            <li className="p-3 ">chhavirathod</li>
            <li>
              <ul className="flex justify-center">
                <li className="p-3">Home</li>
                <li className="p-3">About</li>
                <li className="p-3">Projects</li>
                <li className="p-3">Contact</li>
              </ul>
            </li>
            <li className="p-2 rounded-xl">
              <button className="bg-transparent hover:bg-zinc-200 rounded-lg p-2">
                <LuSun />
              </button>
            </li>
          </ul>
        </nav>
        <main className="m-10 w-90vw h-screen pt-10 text-zinc-200">
          <ReactTyped
            className="text-xl"
            strings={[
              "Hey there! My name is,",
              "const myName = () =>",
              "System.out.println(myName),",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <h1 className="text-6xl py-5">
            <b>CHHAVI RATHOD</b>
          </h1>
          <p className="text-3xl">Building Websites that make an impact</p>
          <p className="py-6 text-2xl">
            I'm a passionate full stack web developer, currently juggling
            academics,
            <p> building projects and learning more about the tech world.</p>
          </p>
        </main>
      </BackgroundGradientAnimation>
      <section className="p-6 pt-12 bg-black text-white relative">
        <div className="flex justify-center text-4xl">
          <b>About Me</b>
        </div>
        <div className="grid grid-cols-2 mt-9 pt-2">
          <div className="flex justify-center pt-6">
            <img className="h-[80%] rounded-full" src={chhavipic} alt="" />
          </div>
          <div className="text-2xl pt-8">
            <p>
              I’m a Computer Science undergraduate from Mumbai, who loves to
              develop and create websites that make an impact through creativity
              and logic, with a hint of visually attractive user interface.
            </p>
            <br />
            <p>
              Recently, I've been looking into the fascinating world of AI,
              exploring its potential to transform how we perceive and interact
              with technology.
            </p>
            <br />
            <p>
              When I'm not coding, you can spot me in sports and fitness,
              finding inspiration for both my projects and personal health.
            </p>
          </div>
        </div>
      </section>
      <section className=" min-h-screen p-6 bg-black text-white">
        <div className="flex justify-center text-4xl mb-12">
          <b>My Projects</b>
        </div>
        <div className=" flex items-center justify-center ">
          <CardContainer>
            <CardBody>
              <CardItem
                translateZ={50}
                className="bg-black p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-xl font-bold mb-2">Dholera SIR</h2>
                <p className="text-gray-600">
                  Land Plot Selling Business Website.
                </p>
                <br />
                <img src={dholera} alt="" />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardItem
                translateZ={50}
                className="bg-black p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-xl font-bold mb-2">InnoGuard</h2>
                <p className="text-gray-600">
                  Financial Fraud detector for small businesses.
                </p>
                <br />
                <img src={finfraud} alt="" />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer>
            <CardBody>
              <CardItem
                translateZ={50}
                className="bg-black p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-xl font-bold mb-2">ArtiFACTS</h2>
                <p className="text-gray-600">
                  Cultural Artifact Recognition Site.
                </p>
                <br />
                <img src={artifacts} alt="" />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>
      <section className="min-h-screen p-6 bg-black text-white">
        <div className="flex justify-center text-4xl mb-12">
          <b>My Skills</b>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* Web Development */}
          <div className="flex flex-col items-center bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-center p-6">
              Web Development
            </h3>
            <div className="grid grid-cols-2 gap-12 pb-8">
              <img
                src={html}
                alt="HTML"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={css}
                alt="CSS"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={tailwindcss}
                alt="Tailwind CSS"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={bootstrap}
                alt="Bootstrap"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Languages */}
          <div className="flex flex-col items-center bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-center p-6">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-12 pb-8">
              <img
                src={cpp}
                alt="C++"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={java}
                alt="Java"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={javascript}
                alt="JavaScript"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={python}
                alt="Python"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Frameworks */}
          <div className="flex flex-col items-center bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-center p-6">
              Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-12 pb-8">
              <img
                src={react}
                alt="React"
                className="w-19 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={vite}
                alt="Vite"
                className="w-16 h-16 hover:scale-110 transition-transform duration-300"
              />
              <img
                src={node}
                alt="Node.js"
                className="w-19 h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="pt-6 bg-black text-white">
        <div className="flex justify-center ">
          <b className="text-4xl mb-12">Get in touch</b>
        </div>
        <div className="text-center text-2xl">
          I'm currently available for working as an intern and freelancing.
        </div>

        <div className="text-center text-2xl">
          Email me at{" "}
          <a className="hover:underline" href="mailto:chhavirathod05@gmail.com">
            chhavirathod05@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/chhavi-rathod/"
          >
            LinkedIn
          </a>
          !
        </div>
        <br />
        <div>
          <div className="flex gap-10 justify-center text-2xl text-gray-400 m-12">
            <a
              href="https://www.linkedin.com/in/chhavi-rathod/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/chhavirathod"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/chhavi_rathod"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-all"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <br />
        <div className="bg-zinc-900 p-4">
        <div className="text-center">All rights reserved © 2025</div>
        <div className="text-center">Hope you have a good day!❤️</div></div>
      </footer>
    </div>
  );
}

export default App;
