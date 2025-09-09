import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center gap-5 lg:gap-10">
      <Image
        src={"/project-1.webp"}
        alt="project-1"
        width={360}
        height={300}
        priority
        className="object-contain w-[250px] lg:w-auto"
      />
      <Image
        src={"/project-1.webp"}
        alt="project-1"
        width={360}
        height={300}
        priority
        className="object-contain w-[250px] lg:w-auto"
      />
      <Image
        src={"/project-1.webp"}
        alt="project-1"
        width={360}
        height={300}
        priority
        className="object-contain w-[250px] lg:w-auto"
      />
      <Image
        src={"/project-1.webp"}
        alt="project-1"
        width={360}
        height={300}
        priority
        className="object-contain w-[250px] lg:w-auto"
      />
    </section>
  );
};

export default Projects;
