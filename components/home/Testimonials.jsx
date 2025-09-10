import React from "react";
import TestimonialCard from "./TestimonialCard";
import AnimatedText from "../common/AnimatedText";
import { TESTIMONIALS } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y">
      <AnimatedText>
        <h2 className="section-heading text-center">
          <strong className="font-semibold">Testimonials</strong>
        </h2>
      </AnimatedText>

      <div className="w-full flex items-center justify-center gap-10 mt-12 relative animate-marquee hover:[animation-play-state:paused]">
        {TESTIMONIALS?.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
