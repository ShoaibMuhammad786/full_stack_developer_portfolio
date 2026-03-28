import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import BlackButton from "../common/BlackButton";

const Navbar = () => {
  return (
    <header
      className="w-full flex items-center justify-center z-50 fixed top-5"
      role="banner"
      aria-label="Main website header"
    >
      <nav
        className="mx-auto flex items-center justify-center gap-2 border rounded-3xl py-3 lg:py-1 px-1 bg-white"
        aria-label="Primary navigation and social links"
      >
        {/* Home */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="block px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-full"
        >
          <TiHomeOutline className="text-2xl" aria-hidden="true" />
        </Link>

        <div
          className="border h-8 lg:h-10 border-gray-100"
          aria-hidden="true"
        />

        {/* GitHub */}
        <Link
          href="https://github.com/shoaibmuhammad-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Shoaib Muhammad’s GitHub profile"
          className="block px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-full"
        >
          <FaGithub className="text-2xl" aria-hidden="true" />
        </Link>

        <div
          className="border h-8 lg:h-10 border-gray-100"
          aria-hidden="true"
        />

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/shoaib-muhammad-mern-stack-developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Shoaib Muhammad on LinkedIn"
          className="block px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-full"
        >
          <IoLogoLinkedin className="text-2xl" aria-hidden="true" />
        </Link>

        <div
          className="border h-8 lg:h-10 border-gray-100"
          aria-hidden="true"
        />

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/iam_shoaibmemon/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Shoaib Muhammad’s Instagram profile"
          className="block px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-full"
        >
          <FaInstagram className="text-2xl" aria-hidden="true" />
        </Link>

        <div
          className="border h-8 lg:h-10 border-gray-100 hidden md:block"
          aria-hidden="true"
        />

        {/* Primary CTA */}
        <div className="hidden md:block">
          <BlackButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
