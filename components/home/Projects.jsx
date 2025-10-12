"use client";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import React from "react";

const Projects = () => {
  // hover:[animation-play-state:paused]
  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center">
      <div className="flex items-center gap-7 z-10 relative animate-marquee">
        {[...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, i) => (
          <Image
            key={i}
            src={project?.image}
            alt="project-1"
            width={360}
            height={300}
            priority
            className="object-cover w-[250px] h-[140px] lg:h-[200px] xl:h-[260px] rounded-2xl lg:w-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
