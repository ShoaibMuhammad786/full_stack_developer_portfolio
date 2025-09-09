import React from "react";
import ProjectCard from "../common/ProjectCard";
import AnimatedText from "../common/AnimatedText";
import { FiArrowUpRight } from "react-icons/fi";

const PorftolioProjects = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y">
      <AnimatedText>
        <h2 className="section-heading text-center">
          <strong className="font-semibold">
            Work That I have Done So Far
          </strong>
        </h2>
      </AnimatedText>

      <div className="w-full mt-12 grid grid-cols-2 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <AnimatedText>
        <div className="w-full flex justify-center mt-16">
          <button
            type="button"
            className="text-base lg:text-lg px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 mt-2 bg-black text-white transition-all duration-300"
          >
            View More <FiArrowUpRight className="text-xl" />
          </button>
        </div>
      </AnimatedText>
    </section>
  );
};

export default PorftolioProjects;
