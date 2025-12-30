import React from "react";
import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article
      className="min-w-[430px] min-h-[250px] bg-[#f9f9f9] py-7 px-9 rounded-2xl border border-gray-100 flex flex-col justify-between"
      role="listitem"
      aria-label={`Testimonial from ${testimonial.author}`}
    >
      {/* Review */}
      <blockquote className="text-lg leading-[1.35] secondary-text">
        “{testimonial.review}”
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 mt-6">
        <Image
          src="/profile-icon.png"
          alt={`${testimonial.author}, ${testimonial.designation}`}
          width={45}
          height={45}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <cite className="not-italic font-semibold text-gray-700">
            {testimonial.author}
          </cite>
          <span className="text-xs text-gray-600">
            {testimonial.designation}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default TestimonialCard;
