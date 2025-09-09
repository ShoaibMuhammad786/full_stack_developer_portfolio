import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <AnimatedText>
      <div className="w-full border border-gray-200 p-5 rounded-3xl mx-auto">
        <Image
          src={"/project-1.webp"}
          alt="project image"
          width={1280}
          height={720}
          loading="lazy"
          className="max-h-[620px] object-cover rounded-[20px]"
        />

        <div className="w-full pt-5 space-y-3">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold leading-none tracking-tight">
            <strong className="font-semibold">LaunchBox Global Website</strong>
          </h3>
          <p className="main-description text-start text-lg leading-[1.3] secondary-text z-10 tracking-tight">
            <strong className="font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium quaerat asperiores officiis porro soluta. Animi rem
              fugit minima quas earum.
            </strong>
          </p>
          <Link
            href={`/`}
            aria-label="Project link"
            className="bg-gray-300/30 text-gray-500 text-base lg:text-base px-6 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 mt-2 hover:bg-black hover:text-white transition-all duration-300"
          >
            View Project <FiArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>
    </AnimatedText>
  );
};

export default ProjectCard;
