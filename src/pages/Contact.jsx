import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 bg-[#132440] text-[#FDB5CE]"
      id="contact"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          <b className="text-3xl sm:text-4xl mb-6">Get in touch</b>
        </div>

        <p className="text-center text-lg sm:text-2xl mb-4">
          I'm currently available for internships and freelance work.
        </p>

        <p className="text-center text-base sm:text-xl mb-6">
          Email me at{" "}
          <a
            className="hover:underline text-[#FDB5CE]"
            href="mailto:chhavirathod05@gmail.com"
          >
            chhavirathod05@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            className="hover:underline text-[#3B9797]"
            href="https://www.linkedin.com/in/chhavi-rathod/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          !
        </p>

        <div className="flex gap-8 sm:gap-10 justify-center text-2xl text-[#FDB5CE]/70 my-10">
          <a
            href="https://www.linkedin.com/in/chhavi-rathod/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3B9797] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/chhavirathod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FDB5CE] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/chhavi_rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FDB5CE] transition-all"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <footer className="mt-6 bg-[#16476A] border-t border-[#3B9797] px-4 py-4">
        <div className="text-center text-sm sm:text-base">
          All rights reserved © 2025
        </div>
        <div className="text-center text-sm sm:text-base">
          Hope you have a good day!❤️
        </div>
      </footer>
    </section>
  );
}
