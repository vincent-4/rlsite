export const metadata = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

import NavBar from "@/app/components/NavBar";
import ProjectCard from "./projectCard";
import Footer from "@/app/components/Footer";
import JoinUs from "@/app/components/JoinUs";

export default function Projects() {
  return (
    <>
      <NavBar />
      <main
        className="bg-bck-white bg-[url('/images/assets/grid.png')]
      px-24 py-12
      ---768px---
      max-md:px-8

      ---520px---
      max-mobile:px-4 
      "
      >
        <header className="flex justify-between items-end gap-24 mb-12">
          <div className="max-w-640 flex flex-col gap-4">
            <h1 className="font-neraphic text-h2 text-text-darkBody max-md:text-h3">
              The Project Collective
            </h1>
            <p className="font-suse text-bodyLarge leading-normal text-text-darkBody">
              See how we’ve turned ideas into{" "}
              <span className="line-through">virtual</span> reality.{" "}
              <span className="text-grey-40">
                Dive into our teams’ current research.
              </span>
            </p>
          </div>
          <img src="/images/assets/shapes.png" className="h-10 w-auto max-md:hidden" alt=""/>
        </header>

        {/* ---PROJECT CARDS--- */}
        <section className="grid grid-cols-2 gap-x-6 gap-y-16
        ---786px---
        max-md:gap-y-12 

        ---520px---
        max-mobile:gap-y-8

        ">
          <ProjectCard
            title="Reality From Scratch"
            descrip={[
              "By using an IMU connected to an Arduino Pro Micro, we achieved ",
              <b key="rotational">rotational (3DoF) tracking.</b>,
              " The IMU motion vector data is translated into SteamVR readable input through drivers forked from the OpenVR SDK.",
            ]}
            img="/images/photos/reality-from-scratch.png"
            link="realityfromscratch"
          />
          <ProjectCard
            title="Project Northstar"
            descrip={[
              "A fully self-contained ",
              <b key="proj AR">AR device</b>,
              " using optical combiners and Intel's RealSense T265. Based on Ultraleap's Project North Star.",
            ]}
            img="/images/photos/northstar.png"
            link="northstar"
          />
          <ProjectCard
            title="Universal Gestures"
            descrip="Using deep learning to understand hand-tracked movements."
            img="/images/photos/universal-gestures.png"
            link="universalgestures"
          />
          <ProjectCard
            title="VITracker"
            descrip="A snippet from one of our member’s research on the vergence-accomodation conflict."
            img="/images/photos/varifocal-research.png"
            link="varifocalresearch"
            grid="double"
          />
          <ProjectCard
            title="Universal Text"
            descrip={[
              "A ",
              <b key="convolutional">convolutional neural network</b>,
              " capable of adding natural blur to frames generated by a game engine in real time",
            ]}
            img="/images/photos/deep-focus.png"
            link="deepfocus"
            grid="double"
          />
          <ProjectCard
            title="Anima"
            descrip={[
              "A ",
              <b key="convolutional">convolutional neural network</b>,
              " capable of adding natural blur to frames generated by a game engine in real time",
            ]}
            img="/images/photos/deep-focus.png"
            link="deepfocus"
            grid="double"
          />
        </section>
        <JoinUs/>
      </main>
      <Footer />
    </>
  );
}
