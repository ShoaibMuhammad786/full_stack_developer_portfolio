import Image from "next/image";
import React from "react";
import BlackButton from "../common/BlackButton";
import GreenButton from "../common/GreenButton";
import AnimatedText from "../common/AnimatedText";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col items-start justify-center gap-5 relative padding-x pb-20 pt-32 lg:pb-32 lg:pt-40 2xl:pt-52"
      aria-labelledby="hero-heading"
    >
      {/* Profile Image (Decorative + Personal Branding) */}
      <AnimatedText direction="left">
        <div
          className="bg-[#f6f6f6] rounded-full max-w-[110px] h-[110px] flex items-end justify-center overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/shoaib-muhammad-profile-picture.webp"
            width={170}
            height={170}
            alt="Shoaib Muhammad – Full Stack Web Developer specializing in MERN stack and Next.js"
            priority
            className="object-contain max-w-[130px]"
          />
        </div>
      </AnimatedText>

      {/* PRIMARY H1 — MOST IMPORTANT SEO ELEMENT */}
      <AnimatedText direction="right">
        <header>
          <h1 id="hero-heading" className="main-heading z-10">
            <strong className="font-semibold">
              Full Stack Web Developer <br />
              Building High-Performance Web Applications
            </strong>
          </h1>
        </header>
      </AnimatedText>

      {/* SUPPORTING DESCRIPTION (KEYWORD-RICH, HUMAN) */}
      <AnimatedText direction="left">
        <p className="main-description lg:max-w-[85%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
          I’m <strong className="font-medium">Shoaib Muhammad</strong>, a full
          stack web developer specializing in building fast, scalable, and
          SEO-friendly web applications using the{" "}
          <strong className="font-medium">MERN stack</strong>.
          <br />
          <br />I create modern frontends with{" "}
          <strong className="font-medium">React.js</strong> and{" "}
          <strong className="font-medium">Next.js</strong>, and develop robust,
          secure backends using <strong className="font-medium">Node.js</strong>
          , <strong className="font-medium">Express.js</strong>, and{" "}
          <strong className="font-medium">MongoDB</strong>. My focus is on
          performance, clean architecture, maintainable code, and user-centric
          digital experiences that rank well on search engines.
        </p>
      </AnimatedText>

      {/* PRIMARY CTA (CONVERSION + SEO SIGNAL) */}
      <AnimatedText direction="right">
        <div
          className="flex items-center gap-3"
          role="group"
          aria-label="Primary actions"
        >
          <BlackButton aria-label="View my projects and portfolio" />
          <GreenButton aria-label="Contact me for web development services" />
        </div>
      </AnimatedText>
    </section>
  );
};

export default Hero;
