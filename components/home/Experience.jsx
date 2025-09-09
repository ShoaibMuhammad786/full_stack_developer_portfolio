import Image from "next/image";
import React from "react";
import AnimatedText from "../common/AnimatedText";

const Experience = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y">
      <AnimatedText>
        <h2 className="section-heading">
          <strong className="font-semibold">Work Experience</strong>
        </h2>
      </AnimatedText>

      {[1, 2, 3]?.map((_, i) => {
        return (
          <AnimatedText>
            <div
              key={i}
              className={`w-full flex items-start md:items-center gap-x-5 lg:gap-x-20 ${
                i === 0 ? "mt-10" : "mt-5"
              }`}
            >
              <p className="text-start text-lg leading-[1.3] text-gray-400 z-10 tracking-tight font-medium min-w-[120px]">
                2024 - 2025
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 gap-x-4">
                <p className="text-start text-xl leading-[1.3] text-gray-400 z-10 tracking-tight font-semibold">
                  Mid-level Web Developer
                </p>
                <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl min-w-[100px]">
                  <Image
                    src={"/lbg-logo.svg"}
                    alt="lbg-logo"
                    width={100}
                    height={30}
                    loading="lazy"
                    className=""
                  />
                </div>
              </div>
            </div>
          </AnimatedText>
        );
      })}
    </section>
  );
};

export default Experience;
