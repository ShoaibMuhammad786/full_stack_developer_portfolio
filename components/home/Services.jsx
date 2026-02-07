import React from "react";
import ServiceCard from "./ServiceCard";
import AnimatedText from "../common/AnimatedText";
import { SERVICES } from "@/constants/services";

const Services = () => {
  return (
    <section
      className="w-full relative overflow-hidden padding-x padding-y"
      aria-labelledby="services-heading"
    >
      {/* Section Heading */}
      <AnimatedText>
        <header>
          <h2 id="services-heading" className="section-heading text-center">
            <strong className="font-semibold">
              Web Development & Frontend Services
            </strong>
          </h2>
        </header>
      </AnimatedText>

      <div
        className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
        role="list"
        aria-label="List of web development services"
      >
        {SERVICES?.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
