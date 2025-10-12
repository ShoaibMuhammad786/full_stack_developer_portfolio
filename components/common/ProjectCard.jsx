import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  return (
    <AnimatedText key={index}>
      <div className="w-full border border-gray-200 p-3 xl:p-5 rounded-3xl mx-auto">
        <Image
          src={project?.image}
          alt="project image"
          width={1280}
          height={720}
          loading="lazy"
          className="lg:h-[240px] xl:h-[320px] 2xl:h-[380px] max-h-[380px] object-cover rounded-[20px]"
        />

        <div className="w-full pt-5 flex items-center justify-between gap-2">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold leading-none tracking-tight">
            <strong className="font-semibold">{project?.title}</strong>
          </h3>
          {/* {project?.description && (
            <p className="main-description text-start text-lg leading-[1.3] secondary-text z-10 tracking-tight">
              <strong className="font-normal">{project?.description}</strong>
            </p>
          )} */}
          <Link
            href={project?.url ? project?.url : `/`}
            aria-label="Project link"
            target="_blank"
            className="bg-gray-300/30 text-gray-500 text-base lg:text-base px-2 py-2 rounded-lg font-semibold inline-flex items-center  hover:bg-black hover:text-white transition-all duration-300"
          >
            <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>
    </AnimatedText>
  );
};

export default ProjectCard;
