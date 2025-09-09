import React from "react";
import AnimatedText from "../common/AnimatedText";

const About = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y space-y-4">
      <AnimatedText>
        <h2 className="section-heading">
          <strong className="font-semibold">About</strong>
        </h2>
      </AnimatedText>
      <AnimatedText>
        <p className="main-description lg:w-[85%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
          <strong className="font-normal">
            Hello! I’m Shoaib Muhammad, a{" "}
            <span className="font-medium">Full Stack Web Developer</span> with a
            deep passion for crafting modern, responsive, and high-performance
            user interfaces using React.js and Next.js. I turn complex ideas
            into smooth, elegant digital experiences.
          </strong>
        </p>
      </AnimatedText>
      <AnimatedText>
        <p className="main-description lg:w-[85%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
          <strong className="font-normal">
            Hello! I’m Shoaib Muhammad, a{" "}
            <span className="font-medium">Full Stack Web Developer</span> with a
            deep passion for crafting modern, responsive, and high-performance
            user interfaces using React.js and Next.js. I turn complex ideas
            into smooth, elegant digital experiences.
          </strong>
        </p>
      </AnimatedText>
    </section>
  );
};

export default About;
