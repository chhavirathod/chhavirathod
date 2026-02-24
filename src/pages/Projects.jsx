import React from "react";
import dholera from "../assets/dholeraProj.png";
import finfraud from "../assets/finFraud.png";
import artifacts from "../assets/artifacts.png";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Projects() {
  return (
    <section className="pt-12 min-h-screen p-6 bg-black text-white" id="projects">
      <div className="flex justify-center text-4xl mb-12">
        <b>My Projects</b>
      </div>
      <div className=" flex items-center justify-center ">
        <CardContainer>
          <CardBody>
            <CardItem translateZ={50} className="bg-black p-6 rounded-xl shadow-lg">
              <a href="https://modidreamdholerasir.com/" target="_blank" rel="noreferrer">
                <h2 className="text-xl font-bold mb-2">Dholera SIR</h2>
                <p className="text-gray-600">Land Plot Selling Business Website.</p>
                <br />
                <img src={dholera} alt="Dholera" />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <CardItem translateZ={50} className="bg-black p-6 rounded-xl shadow-lg">
              <a href="https://innovathon-beaches.vercel.app/" target="_blank" rel="noreferrer">
                <h2 className="text-xl font-bold mb-2">InnoGuard</h2>
                <p className="text-gray-600">Financial Fraud detector for small businesses.</p>
                <br />
                <img src={finfraud} alt="InnoGuard" />
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <CardItem translateZ={50} className="bg-black p-6 rounded-xl shadow-lg">
              <a href="https://github.com/chhavirathod/RUBIX25_TEAM_14_BEACHES" target="_blank" rel="noreferrer">
                <h2 className="text-xl font-bold mb-2">ArtiFACTS</h2>
                <p className="text-gray-600">Cultural Artifact Recognition Site.</p>
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
