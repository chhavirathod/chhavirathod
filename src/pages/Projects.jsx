import React from "react";
import dholera from "../assets/dholeraProj.png";
import finfraud from "../assets/finFraud.png";
import artifacts from "../assets/artifacts.png";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Projects() {
  return (
    <section
      className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#132440] text-[#FDB5CE]"
      id="projects"
    >
      <div className="flex justify-center text-3xl sm:text-4xl mb-20">
        <b>My Projects</b>
      </div>
      <div className="flex flex-col gap-8 items-stretch md:flex-row md:flex-wrap md:justify-center">
        <CardContainer>
          <CardBody>
            <CardItem
              translateZ={50}
              className="border border-[#3B9797] p-6 rounded-xl shadow-lg shadow-black/40"
            >
              <a href="https://modidreamdholerasir.com/" target="_blank" rel="noreferrer">
                <h2 className="text-white/80 text-xl font-bold mb-2">Dholera SIR</h2>
                <p className="text-sm sm:text-base text-white/80">
                  Land Plot Selling Business Website.
                </p>
                <br />
                <img src={dholera} alt="Dholera" />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <CardItem
              translateZ={50}
              className=" border border-[#3B9797] p-6 rounded-xl shadow-lg shadow-black/40"
            >
              <a href="https://innovathon-beaches.vercel.app/" target="_blank" rel="noreferrer">
                <h2 className="text-white/80 text-xl font-bold mb-2">InnoGuard</h2>
                <p className="text-sm sm:text-base text-white/80">
                  Financial Fraud detector for firms.
                </p>
                <br />
                <img src={finfraud} alt="InnoGuard" />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <CardItem
              translateZ={50}
              className="border border-[#3B9797] p-6 rounded-xl shadow-lg shadow-black/40"
            >
              <a href="https://github.com/chhavirathod/RUBIX25_TEAM_14_BEACHES" target="_blank" rel="noreferrer">
                <h2 className="text-white/80 text-xl font-bold mb-2">ArtiFACTS</h2>
                <p className="text-sm sm:text-base text-white/80">
                  Cultural Artifact Recognition Site.
                </p>
                <br />
                <img src={artifacts} alt="ArtiFACTS" />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
