"use client";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center">
      <div className="flex items-center gap-10 w-max z-10 relative animate-marquee hover:[animation-play-state:paused]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, i) => (
          <Image
            key={i}
            src={"/project-1.webp"}
            alt="project-1"
            width={360}
            height={300}
            priority
            className="object-contain w-[250px] lg:w-auto cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
