import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cloud_foundations from "../assets/AWS_Academy_Cloud_Foundations.jpg";
import cloud_architecting from "../assets/AWS_Academy_Graduate___Cloud_Architecting.jpg";
import full_stack_web_dev from "../assets/Full_stack_web_dev-udemy.jpg";
import ccna from "../assets/CCNA_Introduction_to_Networks.jpg";
import aws_cloud_virtual_internship from "../assets/AWS_Cloud_Virtual_internship.jpg";
import { div } from "motion/react-client";

const certificates = [
  {
    title: "AWS Cloud Virtual Internship",
    image: aws_cloud_virtual_internship,
  },
  {
    title: "AWS Academy Cloud Foundations",
    image: cloud_foundations,
  },
  {
    title: "AWS Academy Cloud Architecting",
    image: cloud_architecting,
  },
  {
    title: "Udemy: Full Stack Web Development",
    image: full_stack_web_dev,
  },
  {
    title: "CCNA: Introduction to Networks",
    image: ccna,
  },
];

const Certificates = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".swipeimage", { yPercent: -50, xPercent: -50 });

      let firstEnter;

      gsap.utils.toArray(".certificate-item").forEach((el) => {
        const image = el.querySelector(".swipeimage");

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

        const fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          duration: 0.2,
          onReverseComplete: stopFollow,
        });

        el.addEventListener("mouseenter", (e) => {
          firstEnter = true;
          fade.play();
          startFollow();
          align(e);
        });

        el.addEventListener("mouseleave", () => {
          fade.reverse();
        });
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div>
        <h3 style={{ color: "white" }} className="flex justify-center text-4xl mb-12"><b>Certificates</b></h3>
    <div id="certificates" ref={containerRef} style={styles.wrapper}>
      <ul style={styles.list}>
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item" style={styles.item}>
            <img
              src={cert.image}
              alt={cert.title}
              className="swipeimage"
              style={styles.image}
            />
            <div>
              <h3>{cert.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  list: {
    width: "100%",
    padding: 0,
    margin: 0,
    color: "#fff",
  },
  item: {
    listStyle: "none",
    borderBottom: "1px solid #ddd",
    padding: "2rem",
    cursor: "pointer",
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