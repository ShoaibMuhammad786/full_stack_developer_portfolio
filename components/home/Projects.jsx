import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section
      aria-hidden="true"
      className="w-full relative overflow-hidden flex items-center justify-center"
    >
      <div className="flex items-center gap-7 z-10 relative animate-marquee">
        {[...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS].map(
          (project, i) => (
            <Image
              key={i}
              src={project?.image}
              alt={`${project?.title} project image`}
              width={360}
              height={300}
              priority={false}
              loading="lazy"
              sizes="(max-width: 768px) 250px, (max-width: 1200px) 300px, 360px"
              className="object-cover w-[250px] h-[140px] lg:h-[200px] xl:h-[260px] rounded-2xl lg:w-auto"
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Projects;

// hover:[animation-play-state:paused]
