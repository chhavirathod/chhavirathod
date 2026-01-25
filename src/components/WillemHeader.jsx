import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/willem.css";

export default function WillemHeader() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    // If already seen, remove loader from DOM immediately
    if (hasSeenLoader) {
      container.remove();
      return;
    }

    // GSAP Context (React-safe)
    const ctx = gsap.context(() => {
      // Scope selectors to the container to avoid accidental global matches
      const loadingLetter = Array.from(container.querySelectorAll(".willem__letter"));
      const box = Array.from(container.querySelectorAll(".willem-loader__box"));
      const growingImage = Array.from(container.querySelectorAll(".willem__growing-image"));
      const headingStart = Array.from(container.querySelectorAll(".willem__h1-start"));
      const headingEnd = Array.from(container.querySelectorAll(".willem__h1-end"));
      const coverImageExtra = Array.from(container.querySelectorAll(".willem__cover-image-extra"));
      const headerLetter = Array.from(container.querySelectorAll(".willem__letter-white"));
      // animate the real nav links on the page
      const navLinks = Array.from(document.querySelectorAll("nav a"));

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        onStart: () => {
          // reveal overlay
          container.classList.remove("is--hidden");
        },
        onComplete: () => {
          // mark as seen and remove overlay from DOM so homepage is interactive
          sessionStorage.setItem("hasSeenLoader", "true");
          container.remove();
        },
      });

      if (loadingLetter.length) {
        tl.from(loadingLetter, {
          yPercent: 100,
          stagger: 0.025,
          duration: 1.25,
        });
      }

      if (box.length) {
        tl.fromTo(
          box,
          { width: "0em" },
          { width: "1em", duration: 1.25 },
          "<1.25",
        );
      }

      if (growingImage.length) {
        tl.fromTo(
          growingImage,
          { width: "0%" },
          { width: "100%", duration: 1.25 },
          "<",
        );
      }

      if (headingStart.length) {
        tl.fromTo(
          headingStart,
          { x: "0em" },
          { x: "-0.05em", duration: 1.25 },
          "<",
        );
      }

      if (headingEnd.length) {
        tl.fromTo(
          headingEnd,
          { x: "0em" },
          { x: "0.05em", duration: 1.25 },
          "<",
        );
      }

      if (coverImageExtra.length) {
        tl.to(
          coverImageExtra,
          {
            opacity: 0,
            duration: 0.05,
            stagger: 0.5,
            ease: "none",
          },
          "-=0.05",
        );
      }

      if (growingImage.length) {
        tl.to(
          growingImage,
          {
            width: "100vw",
            height: "100dvh",
            duration: 2,
          },
          "<1.25",
        );
      }

      if (box.length) {
        tl.to(
          box,
          {
            width: "110vw",
            duration: 2,
          },
          "<",
        );
      }

      if (headerLetter.length) {
        tl.from(
          headerLetter,
          {
            yPercent: 100,
            duration: 1.25,
            stagger: 0.025,
            ease: "expo.out",
          },
          "<1.2",
        );
      }

      if (navLinks.length) {
        tl.from(
          navLinks,
          {
            yPercent: 100,
            duration: 1.25,
            stagger: 0.1,
            ease: "expo.out",
          },
          "<",
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // start hidden via class only (no inline display:none)
    <section
      ref={containerRef}
      className="willem-header is--loading is--hidden"
    >
      <div className="willem-loader">
        <div className="willem__h1">
          <div className="willem__h1-start">
            <span className="willem__letter">H</span>
            <span className="willem__letter">e</span>
            <span className="willem__letter">l</span>
          </div>

          <div className="willem-loader__box">
            <div className="willem-loader__box-inner">
              <div className="willem__growing-image">
                <div className="willem__growing-image-wrap">
                  <img
                    className="willem__cover-image-extra is--1"
                    src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724bc_minimalist-architecture-2.avif"
                  />
                  <img
                    className="willem__cover-image-extra is--2"
                    src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724cf_minimalist-architecture-4.avif"
                  />
                  <img
                    className="willem__cover-image-extra is--3"
                    src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724c5_minimalist-architecture-3.avif"
                  />
                  <img
                    className="willem__cover-image"
                    src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724b0_minimalist-architecture-1.avif"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="willem__h1-end">
            <span className="willem__letter">l</span>
            <span className="willem__letter">o</span>
          </div>
        </div>
      </div>
    </section>
  );
}
