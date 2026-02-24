import React from "react";
import { ReactTyped } from "react-typed";
import { AsciiArtDemo } from "./AsciiArtDemo";

export default function Home() {
  return (
    <main
      id="home"
      className="description panel m-12 w-90vw min-h-screen text-zinc-200 text-center relative overflow-hidden"
    >
      {/* Ascii art sits visually behind the name. pointer-events-none prevents it from blocking UI */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          // provide a fallback CSS variable so the demo uses the brand pink color
          "--color-neutral-500": "var(--brand-pink)",
        }}
      >
        <div className="w-[80%] max-w-3xl opacity-90">
          <AsciiArtDemo />
        </div>
      </div>

      <div className="relative z-10">
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
        <h1 className="text-6xl py-5 leading-tight font-bold tracking-tight relative z-20">
          CHHAVI RATHOD
        </h1>
        {/* <p className="text-3xl font-medium">Building Websites that make an impact</p>
        <p className="py-6 text-2xl font-light">
          A full stack web developer, building fast, scalable websites that help businesses grow online.
        </p> */}
      </div>
    </main>
  );
}
