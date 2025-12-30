import Image from "next/image";
import React from "react";
import AnimatedText from "../common/AnimatedText";
import { WORK_EXPERIENCE } from "@/constants/experience";
import Link from "next/link";

const Experience = () => {
  return (
    <section
      className="w-full relative overflow-hidden padding-x padding-y"
      aria-labelledby="experience-heading"
    >
      {/* Section Heading */}
      <AnimatedText>
        <header>
          <h2 id="experience-heading" className="section-heading">
            <strong className="font-semibold">Work Experience</strong>
          </h2>
        </header>
      </AnimatedText>

      <div className="mt-10 space-y-10">
        {WORK_EXPERIENCE.map((experience, index) => (
          <AnimatedText key={`${experience.companyName}-${index}`}>
            <article
              className="w-full flex flex-col md:flex-row items-start md:items-center gap-x-5 lg:gap-x-20"
              aria-labelledby={`role-${index}`}
            >
              {/* Timeline */}
              <time
                className="text-start text-base lg:text-xl leading-[1.3] text-gray-500 tracking-tight font-medium min-w-[190px]"
                dateTime={experience.timeline}
              >
                {experience.timeline}
              </time>

              {/* Role + Company */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 gap-x-4 mt-2 md:mt-0">
                <h3
                  id={`role-${index}`}
                  className="text-start text-xl lg:text-2xl leading-[1.3] text-gray-700 tracking-tight font-semibold"
                >
                  {experience.designation}
                </h3>

                <Link
                  href={experience.companyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${experience.companyName} LinkedIn page`}
                  className="group"
                >
                  <div className="border bg-gray-50 border-gray-100 p-2 rounded-xl min-w-[50px] flex items-center gap-2 transition-shadow group-hover:shadow-sm">
                    <Image
                      src={experience.companyLogo}
                      alt={`${experience.companyName} company logo`}
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                    <span className="font-medium tracking-tight text-gray-600 text-sm lg:text-base">
                      {experience.companyName}
                    </span>
                  </div>
                </Link>
              </div>
            </article>
          </AnimatedText>
        ))}
      </div>
    </section>
  );
};

export default Experience;
