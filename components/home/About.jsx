import React from "react";
import AnimatedText from "../common/AnimatedText";
import { GoCheckCircleFill } from "react-icons/go";

const About = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y space-y-4">
      <AnimatedText>
        <h2 className="section-heading">
          <strong className="font-semibold">About</strong>
        </h2>
      </AnimatedText>
      <AnimatedText>
        <p className="main-description lg:w-[90%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
          <strong className="font-normal">
            I am a dedicated{" "}
            <span className="font-medium">Full Stack Web Developer</span>{" "}
            specializing in the <span className="font-medium">MERN </span>
            stack (MongoDB, Express.js, React.js, Node.js) with hands-on
            experience in building dynamic web applications.
          </strong>
        </p>
      </AnimatedText>
      <ul className="space-y-1">
        {[
          "Skilled in responsive UI design with React.js, Next.js, Tailwind CSS.",
          "Experienced in RESTful APIs, authentication, and database design.",
          "Strong understanding of Redux Toolkit, Context API, and state management.",
          "Passionate about clean architecture, testing, and performance optimization.",
        ]?.map((skill, index) => {
          return (
            <li
              key={index}
              className="lg:w-[90%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight flex items-center gap-2"
            >
              <GoCheckCircleFill className="text-base text-gray-500"/>
              <strong className="font-normal">{skill}</strong>
            </li>
          );
        })}
      </ul>
      <AnimatedText>
        <p className="main-description lg:w-[90%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
          <strong className="font-normal">
            With a <span className="font-medium">BSc in Computer Science</span>,
            I enjoy learning new technologies and applying them to real-world
            projects. My goal is to deliver scalable, maintainable, and
            user-focused web applications that provide real value.
          </strong>
        </p>
      </AnimatedText>
    </section>
  );
};

export default About;
