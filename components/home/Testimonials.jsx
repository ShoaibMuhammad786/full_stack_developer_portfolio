import React from "react";
import TestimonialCard from "./TestimonialCard";
import AnimatedText from "../common/AnimatedText";

const Testimonials = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y">
      <AnimatedText>
        <h2 className="section-heading text-center">
          <strong className="font-semibold">Testimonials</strong>
        </h2>
      </AnimatedText>

      <div className="w-full flex items-center justify-center gap-10 mt-12">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
