import React from "react";
import AnimatedText from "../common/AnimatedText";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <AnimatedText>
      <article
        className="
          text-start p-6 2xl:p-10 rounded-2xl
          flex flex-col gap-y-3
          bg-[#f9f9f9]
          lg:h-[260px] xl:h-[230px] 2xl:min-h-[250px]
        "
        aria-labelledby={`service-${service.slug}`}
      >
        {/* Icon */}
        <Image
          src={service.icon}
          alt={`${service.title} service icon`}
          width={45}
          height={45}
          className="max-w-10 grayscale"
        />

        {/* Service Title */}
        <h3
          id={`service-${service.slug}`}
          className="text-xl md:text-2xl tracking-tight font-semibold"
        >
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="main-description text-lg leading-[1.35] secondary-text tracking-tight">
          {service.description}
        </p>
      </article>
    </AnimatedText>
  );
};

export default ServiceCard;
