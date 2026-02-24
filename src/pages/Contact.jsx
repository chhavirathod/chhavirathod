import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="panel pt-6 bg-black text-white" id="contact">
      <div className="flex justify-center ">
        <b className="text-4xl mb-12">Get in touch</b>
      </div>
      <div className="text-center text-2xl">I'm currently available for working as an intern and freelancing.</div>

      <div className="text-center text-2xl">
        Email me at{' '}
        <a className="hover:underline" href="mailto:chhavirathod05@gmail.com">
          chhavirathod05@gmail.com
        </a>{' '}
        or connect with me on{' '}
        <a className="hover:underline" href="https://www.linkedin.com/in/chhavi-rathod/">
          LinkedIn
        </a>
        !
      </div>
      <br />
      <div>
        <div className="flex gap-10 justify-center text-2xl text-gray-400 m-12">
          <a href="https://www.linkedin.com/in/chhavi-rathod/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all">
            <FaLinkedin />
          </a>
          <a href="https://github.com/chhavirathod" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
            <FaGithub />
          </a>
          <a href="https://instagram.com/chhavi_rathod" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all">
            <FaInstagram />
          </a>
        </div>
      </div>
      <br />
      <div className="bg-zinc-900 p-4">
        <div className="text-center">All rights reserved © 2025</div>
        <div className="text-center">Hope you have a good day!❤️</div>
      </div>
    </section>
  );
}
