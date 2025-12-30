import React from "react";
import AnimatedText from "../common/AnimatedText";
import { GoCheckCircleFill } from "react-icons/go";

const About = () => {
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
          <strong className="font-medium">Full Stack Web Developer</strong>{" "}
          specializing in the{" "}
          <strong className="font-medium">MERN stack</strong> (MongoDB,
          Express.js, React.js, and Node.js) with hands-on experience building
          fast, scalable, and SEO-friendly web applications for real-world use
          cases.
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
          "Experienced in building RESTful APIs, authentication systems, and scalable database architectures.",
          "Strong understanding of Redux Toolkit, Context API, and modern state management patterns.",
          "Focused on clean code architecture, performance optimization, accessibility, and testing best practices.",
        ].map((skill, index) => (
          <AnimatedText key={index}>
            <li className="text-start text-xl leading-[1.35] secondary-text tracking-tight flex items-start gap-2">
              <GoCheckCircleFill
                className="text-base text-gray-500 mt-1"
                aria-hidden="true"
              />
              <span>{skill}</span>
            </li>
          </AnimatedText>
        ))}
      </ul>

      {/* Closing Paragraph */}
      <AnimatedText>
        <p className="main-description lg:w-[90%] text-start text-xl leading-[1.35] secondary-text tracking-tight">
          With a{" "}
          <strong className="font-medium">
            Bachelor’s degree in Computer Science
          </strong>
          , I continuously explore modern technologies and industry best
          practices. My goal is to deliver{" "}
          <strong className="font-medium">
            scalable, maintainable, and user-focused web solutions
          </strong>{" "}
          that improve performance, enhance user experience, and support
          long-term business growth.
        </p>
      </AnimatedText>
    </section>
  );
};

export default About;
