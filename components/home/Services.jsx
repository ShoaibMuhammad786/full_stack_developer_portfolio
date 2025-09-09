import React from "react";
import ServiceCard from "./ServiceCard";
import AnimatedText from "../common/AnimatedText";
import { SERVICES } from "@/constants/services";

const Services = () => {
  return (
    <section className="w-full relative overflow-hidden padding-x padding-y">
      <AnimatedText>
        <h2 className="section-heading text-center">
          <strong className="font-semibold">How Can I Help You?</strong>
        </h2>
      </AnimatedText>

      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {SERVICES?.map((service, index) => {
          return <ServiceCard key={index} service={service} index={index}/>;
        })}
      </div>
    </section>
  );
};

export default Services;
