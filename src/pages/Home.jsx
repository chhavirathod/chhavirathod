import React from "react";
import { ReactTyped } from "react-typed";
import { AsciiArtDemo } from "./AsciiArtDemo";
import { FaMapMarkerAlt, FaCode } from "react-icons/fa";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen sm:px-6 lg:px-8 py-16 flex justify-center text-center relative overflow-hidden"
    >
      {/* Ascii art sits visually behind the name. pointer-events-none prevents it from blocking UI */}
      <div
        className="absolute inset-0 typewriter flex items-center justify-center pointer-events-none"
        style={{
          "--color-neutral-500": "var(--brand-pink)",
        }}
      >
        <div className="p-10 w-[80%] max-w-3xl opacity-80">
          <AsciiArtDemo />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-3xl text-[var(--brand-pink)]">
        <ReactTyped
          className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide text-white/80"
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
        {/* floating badges: left = location, right = role */}
        {/* Desktop: badges float left/right of the name. Mobile: badges stack below. */}
        <div
          className="hidden md:flex absolute -left-28 top-1/2 transform -translate-y-1/2"
          aria-hidden
        >
          <div
            className="flex flex-col items-center gap-1 bg-[#132440]/70 border border-[#3B9797]/30 text-[#FDB5CE] px-3 py-2 rounded-lg backdrop-blur-sm"
            style={{ fontFamily: "Sanchez, serif" }}
          >
            <FaMapMarkerAlt className="text-xl" />
            <span className="text-xs uppercase tracking-wider">Based in</span>
            <span className="text-sm font-semibold">MUMBAI</span>
          </div>
        </div>

        <div
          className="hidden md:flex absolute -right-28 top-1/2 transform -translate-y-1/2"
          aria-hidden
        >
          <div
            className="flex flex-col items-center gap-1 bg-[#132440]/70 border border-[#3B9797]/30 text-[#FDB5CE] px-3 py-2 rounded-lg backdrop-blur-sm"
            style={{ fontFamily: "Sanchez, serif" }}
          >
            <FaCode className="text-xl" />
            <span className="text-xs uppercase tracking-wider">Role</span>
            <span className="text-sm font-semibold">Full-Stack Dev</span>
          </div>
        </div>

        <div className="flex md:hidden mt-6 justify-center gap-4">
          <div className="flex items-center gap-3 bg-[#132440]/70 border border-[#3B9797]/30 text-[#FDB5CE] px-3 py-2 rounded-lg backdrop-blur-sm" style={{ fontFamily: "Sanchez, serif" }}>
            <FaMapMarkerAlt className="text-lg" />
            <div className="text-left">
              <div className="text-xs uppercase">Based in</div>
              <div className="text-sm font-semibold">MUMBAI</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#132440]/70 border border-[#3B9797]/30 text-[#FDB5CE] px-3 py-2 rounded-lg backdrop-blur-sm" style={{ fontFamily: "Sanchez, serif" }}>
            <FaCode className="text-lg" />
            <div className="text-left">
              <div className="text-xs uppercase">Role</div>
              <div className="text-sm font-semibold">Full-Stack Dev</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
