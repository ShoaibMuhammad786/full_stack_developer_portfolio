import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  const isAboveFold = index < 2;

  return (
    <AnimatedText key={index}>
      <article className="w-full border border-gray-200 p-3 xl:p-5 rounded-3xl mx-auto xl:min-h-[84vh] 2xl:min-h-[76vh]">
        {/* Image */}
        <Image
          src={project?.image}
          alt={`${project?.title} - ${project?.type} project preview`}
          width={1280}
          height={720}
          // priority={isAboveFold}
          priority={false}
          // loading={isAboveFold ? "eager" : "lazy"}
          loading={"lazy"}
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 720px, 1280px"
          className="lg:h-[240px] xl:h-[320px] 2xl:h-[380px] max-h-[380px] object-cover rounded-[20px]"
        />

        {/* Header */}
        <header className="w-full pt-5 flex items-center justify-between gap-2">
          <h2 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
            {project?.title}
          </h2>

          <Link
            href={project?.url || `/`}
            aria-label={`View ${project?.title} project`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300/30 text-gray-500 px-2 py-2 rounded-lg inline-flex items-center hover:bg-black hover:text-white transition-all duration-300"
          >
            <FiArrowUpRight className="text-xl" />
          </Link>
        </header>

        {/* Description */}
        <div className="w-full mt-2">
          {project?.description && (
            <p className="text-base leading-relaxed secondary-text tracking-tight">
              {project.description}
            </p>
          )}

          {/* Tech Stack */}
          <ul className="flex flex-wrap gap-2 mt-3" aria-label="Tech stack">
            {project?.tech_stack?.map((tech) => (
              <li key={tech}>
                <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-xl">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Structured Data (SEO boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: project.title,
              description: project.description,
              url: project.url,
              image: project.image,
              author: {
                "@type": "Person",
                name: "Shoaib Muhammad",
              },
            }),
          }}
        />
      </article>
    </AnimatedText>
  );
};

export default ProjectCard;
