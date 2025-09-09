import Link from "next/link";
import React from "react";

const GreenButton = () => {
  return (
    <Link
      href={`#contact-me`}
      aria-label="contact button link"
      className="bg-green-500/30 text-green-600/80 text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold flex items-center gap-3"
    >
      <span class="relative hidden md:flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      Available for new project
    </Link>
  );
};

export default GreenButton;
