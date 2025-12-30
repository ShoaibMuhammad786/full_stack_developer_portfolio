import React from "react";
import TestimonialCard from "./TestimonialCard";
import AnimatedText from "../common/AnimatedText";
import { TESTIMONIALS } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section
      className="w-full relative overflow-hidden padding-x padding-y"
      aria-labelledby="testimonials-heading"
    >
      {/* Section Heading */}
      <AnimatedText>
        <header>
          <h2 id="testimonials-heading" className="section-heading text-center">
            <strong className="font-semibold">What Clients Say</strong>
          </h2>
        </header>
      </AnimatedText>

      {/* Testimonials Marquee */}
      <div
        className="w-full flex items-center justify-center gap-10 mt-12 relative animate-marquee hover:[animation-play-state:paused]"
        role="list"
        aria-label="Client testimonials"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.author}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
