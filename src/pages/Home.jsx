import React from "react";
import { ReactTyped } from "react-typed";
import { AsciiArtDemo } from "./AsciiArtDemo";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Ascii art sits visually behind the name. pointer-events-none prevents it from blocking UI */}
      <div
        className="absolute inset-0 typewriter flex items-center justify-center pointer-events-none"
        style={{
          "--color-neutral-500": "var(--brand-pink)",
          background:
            "radial-gradient(circle at top, #3B9797 0, #16476A 35%, #132440 70%, #000 100%)",
        }}
      >
        <div className="w-full max-w-3xl opacity-80">
          <AsciiArtDemo />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-3xl text-[var(--brand-pink)]">
        <ReactTyped
          className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide text-[var(--brand-teal)]"
          strings={[
            "Hey there! My name is,",
            "const myName = () =>",
            "System.out.println(myName),",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-3 leading-tight font-bold tracking-tight relative z-20">
          CHHAVI RATHOD
        </h1>
        {/* <p className="mt-4 text-base sm:text-lg md:text-2xl text-[var(--brand-pink)]/80">
          Building websites that make an impact.
        </p> */}
      </div>
    </main>
  );
}
