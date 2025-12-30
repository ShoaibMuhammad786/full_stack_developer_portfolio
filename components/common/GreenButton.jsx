import Link from "next/link";
import React from "react";

const GreenButton = () => {
  return (
    <Link
      href="#contact-me"
      aria-label="Contact Shoaib Muhammad for a new web development project"
      className="
        bg-green-500/30 text-green-700
        text-xs md:text-base lg:text-lg
        px-5 lg:px-8 py-4
        rounded-3xl font-semibold
        flex items-center gap-3
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500
      "
    >
      <span className="relative hidden md:flex h-3 w-3" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      Available for New Projects
    </Link>
  );
};

export default GreenButton;
