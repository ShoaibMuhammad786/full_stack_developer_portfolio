import React from "react";
import AnimatedText from "../common/AnimatedText";
import { GoDotFill } from "react-icons/go";

const AboutFrontendDev = () => {
  return (
    <section
      className="w-full relative overflow-hidden padding-x padding-y space-y-6"
      aria-labelledby="about-heading"
    >
      {/* Section Heading */}
      <AnimatedText>
        <header>
          <h2 id="about-heading" className="section-heading">
            <strong className="font-semibold">About Me</strong>
          </h2>
        </header>
      </AnimatedText>

      {/* Intro Paragraph */}
      <AnimatedText>
        <p className="main-description lg:w-[90%] text-start text-xl leading-[1.35] secondary-text tracking-tight">
          I am a dedicated{" "}
          <strong className="font-medium">Frontend Developer</strong>{" "}
          specializing in building fast, scalable, and SEO-friendly web
          applications using{" "}
          <strong className="font-medium">React.js and Next.js</strong>. I focus
          on creating modern, high-performance user interfaces that deliver
          seamless and engaging user experiences.
        </p>
      </AnimatedText>

      {/* Skills List */}
      <ul
        className="space-y-2 lg:w-[90%]"
        role="list"
        aria-label="Core skills and expertise"
      >
        {[
          "Expert in responsive UI development using React.js, Next.js, and Tailwind CSS.",
          "Skilled in converting Figma and design systems into pixel-perfect, accessible interfaces.",
          "Strong understanding of state management using Redux Toolkit and Context API.",
          "Focused on performance optimization, Core Web Vitals, accessibility, and clean component architecture.",
        ].map((skill, index) => (
          <li className="text-start" key={index}>
            <AnimatedText>
              <div className="w-full flex items-start gap-2">
                <GoDotFill
                  className="text-base text-gray-500 mt-1"
                  aria-hidden="true"
                />
                <span className="text-xl leading-[1.35] secondary-text tracking-tight">
                  {skill}
                </span>
              </div>
            </AnimatedText>
          </li>
        ))}
      </ul>

      {/* Closing Paragraph */}
      <AnimatedText>
        <p className="main-description lg:w-[90%] text-start text-xl leading-[1.35] secondary-text tracking-tight">
          With a{" "}
          <strong className="font-medium">
            Bachelor’s degree in Computer Science
          </strong>
          , I continuously refine my frontend expertise and stay aligned with
          modern UI/UX trends and best practices. My goal is to build{" "}
          <strong className="font-medium">
            intuitive, performant, and user-centric interfaces
          </strong>{" "}
          that enhance user engagement and deliver real business value.
        </p>
      </AnimatedText>
    </section>
  );
};

export default AboutFrontendDev;
