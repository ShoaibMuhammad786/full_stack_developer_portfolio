import Image from "next/image";
import React from "react";
import AnimatedText from "../common/AnimatedText";
import { WORK_EXPERIENCE } from "@/constants/experience";
import Link from "next/link";

const Experience = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y">
      <AnimatedText>
        <h2 className="section-heading">
          <strong className="font-semibold">Work Experience</strong>
        </h2>
      </AnimatedText>

      {WORK_EXPERIENCE?.map((experience, i) => {
        return (
          <AnimatedText>
            <div
              key={i}
              className={`w-full flex flex-col md:flex-row items-start md:items-center gap-x-5 lg:gap-x-20 ${
                i === 0 ? "mt-10" : "mt-10"
              }`}
            >
              <p className="text-start text-base lg:text-xl leading-[1.3] text-gray-500 z-10 tracking-tight font-medium min-w-[190px]">
                {experience?.timeline}
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 gap-x-4 mt-2 md:mt-0">
                <p className="text-start text-xl lg:text-2xl leading-[1.3] text-gray-600 z-10 tracking-tight font-semibold">
                  {experience?.designation}
                </p>
                <Link href={experience?.companyLinkedIn} target="_blank">
                  <div
                    className={`border bg-gray-50 border-gray-100 p-2 rounded-xl min-w-[50px] flex items-center gap-2`}
                  >
                    <Image
                      src={experience?.companyLogo}
                      alt="lbg-logo"
                      width={30}
                      height={30}
                      loading="lazy"
                      className=""
                    />
                    <p className="font-medium tracking-tight text-gray-600 text-sm lg:text-base">
                      {experience?.companyName}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedText>
        );
      })}
    </section>
  );
};

export default Experience;
