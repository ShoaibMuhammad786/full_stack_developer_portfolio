import React from "react";
import AnimatedText from "../common/AnimatedText";
import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    // <AnimatedText>
      <div className="min-w-[430px] bg-[#f9f9f9] py-7 px-9 rounded-2xl border border-gray-100">
        <p className="text-lg leading-[1.2]">
          <strong className="font-normal">{testimonial?.review}</strong>
        </p>

        <div className="flex items-center gap-2 mt-5">
          <Image
            src={testimonial?.image}
            alt={`${testimonial?.author} profile picture`}
            width={45}
            height={45}
            loading="lazy"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col items-start">
            <p className="font-semibold">
              <strong className="font-semibold">{testimonial?.author}</strong>
            </p>
            <p className="text-xs">
              <strong className="font-normal">
                {testimonial?.designation}
              </strong>
            </p>
          </div>
        </div>
      </div>
    // </AnimatedText>
  );
};

export default TestimonialCard;
