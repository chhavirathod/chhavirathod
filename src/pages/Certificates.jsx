import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cloud_foundations from "../assets/AWS_Academy_Cloud_Foundations.jpg";
import cloud_architecting from "../assets/AWS_Academy_Graduate___Cloud_Architecting.jpg";
import full_stack_web_dev from "../assets/Full_stack_web_dev-udemy.jpg";
import ccna from "../assets/CCNA_Introduction_to_Networks.jpg";
import aws_cloud_virtual_internship from "../assets/AWS_Cloud_Virtual_internship.jpg";
import adappt from "../assets/adappt.jpeg";
import redact from "../assets/redact.jpg";

const certificates = [
  {
    title: "AWS Cloud Virtual Internship",
    image: aws_cloud_virtual_internship,
    hoverColor: "#2C5E8F",
  },
  {
    title: "AWS Academy Cloud Foundations",
    image: cloud_foundations,
    hoverColor: "#4D3A8F",
  },
  {
    title: "AWS Academy Cloud Architecting",
    image: cloud_architecting,
    hoverColor: "#8A3C6E",
  },
  {
    title: "Udemy: Full Stack Web Development",
    image: full_stack_web_dev,
    hoverColor: "#8A5B2E",
  },
  {
    title: "CCNA: Introduction to Networks",
    image: ccna,
    hoverColor: "#2E7A6D",
  },
  {
    title: "First Place at Adappt 4.0 Hackathon",
    image: adappt,
    hoverColor: "#7A3148",
  },
  {
    title: "First Place at Redact Hackathon",
    image: redact,
    hoverColor: "#4B5F2A",
  },
];

const Certificates = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanupFns = [];

    const ctx = gsap.context(() => {
      gsap.set(".swipeimage", { yPercent: -50, xPercent: -50 });
      gsap.set(".certificate-overlay", { yPercent: -100 });

      let firstEnter;

      gsap.utils.toArray(".certificate-item").forEach((el) => {
        const image = el.querySelector(".swipeimage");
        const overlay = el.querySelector(".certificate-overlay");

        const setX = gsap.quickTo(image, "x", {
          duration: 0.4,
          ease: "power3",
        });

        const setY = gsap.quickTo(image, "y", {
          duration: 0.4,
          ease: "power3",
        });

        const align = (e) => {
          if (firstEnter) {
            setX(e.clientX);
            setY(e.clientY);
            firstEnter = false;
          } else {
            setX(e.clientX);
            setY(e.clientY);
          }
        };

        const startFollow = () =>
          document.addEventListener("mousemove", align);

        const stopFollow = () =>
          document.removeEventListener("mousemove", align);

        const revealOverlay = () => {
          gsap.killTweensOf(overlay);
          gsap.set(overlay, { yPercent: -100 });
          gsap.to(overlay, {
            yPercent: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const hideOverlay = (event) => {
          const bounds = el.getBoundingClientRect();
          const exitToBottom = event.clientY >= bounds.top + bounds.height / 2;

          gsap.killTweensOf(overlay);
          gsap.to(overlay, {
            yPercent: exitToBottom ? 100 : -100,
            duration: 0.35,
            ease: "power2.inOut",
          });
        };

        const fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          duration: 0.2,
          onReverseComplete: stopFollow,
        });

        const handleMouseEnter = (e) => {
          firstEnter = true;
          revealOverlay();
          fade.play();
          startFollow();
          align(e);
        };

        const handleMouseLeave = (e) => {
          hideOverlay(e);
          fade.reverse();
        };

        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        cleanupFns.push(() => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
          stopFollow();
        });
      });
    }, containerRef);

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="panel min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-[#132440] text-[#FDB5CE]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Certificates
          </h2>
        </div>

        <ul style={styles.list}>
          {certificates.map((cert, index) => (
            <li key={index} className="certificate-item" style={styles.item}>
              <span
                className="certificate-overlay"
                aria-hidden="true"
                style={{
                  ...styles.overlay,
                  backgroundColor: cert.hoverColor,
                }}
              />
              <img
                src={cert.image}
                alt={cert.title}
                className="swipeimage"
                style={styles.image}
              />
              <div style={styles.content}>
                <h3 className="text-lg sm:text-xl">{cert.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    width: "100%",
  },
  list: {
    width: "100%",
    padding: 0,
    margin: 0,
    color: "#fff",
  },
  item: {
    listStyle: "none",
    borderBottom: "1px solid #3B9797",
    padding: "2rem",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    isolation: "isolate",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    transform: "translateY(-100%)",
  },
  content: {
    position: "relative",
    zIndex: 1,
  },
  image: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "350px",
    height: "350px",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    opacity: 0,
    pointerEvents: "none",
  },
};

export default Certificates;
