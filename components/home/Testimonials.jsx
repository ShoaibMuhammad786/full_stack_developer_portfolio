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

      <div className="w-full flex items-center justify-center gap-10 mt-12 relative animate-marquee hover:[animation-play-state:paused]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, i) => (
          <TestimonialCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
