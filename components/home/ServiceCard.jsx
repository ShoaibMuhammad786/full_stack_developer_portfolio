import React from "react";
import "./ServiceCard.css";
import AnimatedText from "../common/AnimatedText";

const ServiceCard = ({ service, index }) => {
  return (
    <AnimatedText>
      <div
        className={`text-start p-6 rounded-2xl flex flex-col items-start justify-center gap-y-3 bg-[#f9f9f9] min-h-[230px]`}
      >
        <img src={service?.icon} alt="" className="max-w-10 grayscale"/>
        <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold leading-[0.8] tracking-tight">
          <strong className="font-semibold">{service?.title}</strong>
        </h3>
        <p className="main-description text-lg leading-[1.3] secondary-text z-10 tracking-tight">
          <strong className="font-normal">{service?.description}</strong>
        </p>
      </div>
    </AnimatedText>
  );
};

export default ServiceCard;
