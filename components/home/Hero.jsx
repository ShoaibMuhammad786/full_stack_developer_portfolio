"use client";
import Image from "next/image";
import React from "react";
import BlackButton from "../common/BlackButton";
import GreenButton from "../common/GreenButton";
import AnimatedText from "../common/AnimatedText";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-start justify-center gap-5 relative padding-x pb-20 pt-32 lg:pb-32 lg:pt-40 2xl:pt-52">
      <AnimatedText direction="left">
        <Image
          src={"/profile-picture.jpg"}
          width={200}
          height={200}
          alt="profile-picture"
          priority
          className="rounded-full object-cover"
        />
      </AnimatedText>
      <AnimatedText direction="right">
        <h1 className="main-heading z-10">
          <strong className="font-semibold">
            Hey, I'm Shoaib Muhammad. <br />A Full Stack Web Developer
          </strong>
        </h1>
      </AnimatedText>
      <AnimatedText direction="left">
        <p className="main-description lg:max-w-[85%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
          <strong className="font-normal">
            Hello! I’m Shoaib Muhammad, a{" "}
            <span className="font-medium">Full Stack Web Developer</span> with a
            deep passion for crafting modern, responsive, and high-performance
            user interfaces using{" "}
            <span className="font-medium">MERN Stack</span> and{" "}
            <span className="font-medium">Next.js</span>. I turn complex ideas
            into smooth, elegant digital experiences.
          </strong>
        </p>
      </AnimatedText>
      <AnimatedText direction="right">
        <div className="flex items-center gap-3">
          <BlackButton />
          <GreenButton />
        </div>
      </AnimatedText>

      {/* <div className="glow top-1/2 right-[30%]" /> */}
    </section>
  );
};

export default Hero;
