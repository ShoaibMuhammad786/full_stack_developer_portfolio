import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import BlackButton from "../common/BlackButton";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center z-50 fixed top-5">
      <nav className="mx-auto flex items-center justify-center gap-2 border rounded-3xl py-1 px-1 bg-white">
        <Link href={`/`} aria-label="link to home page" className="block px-5">
          <TiHomeOutline className="text-2xl" />
        </Link>
        <div className="border h-8 lg:h-10 border-gray-100" />
        <Link
          href={`https://github.com/ShoaibMuhammad786`}
          target="_blank"
          aria-label="link to my github account"
          className="block px-5"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <div className="border h-8 lg:h-10 border-gray-100" />
        <Link
          href={`https://www.linkedin.com/in/shoaib-muhammad-mern-stack-developer/`}
          target="_blank"
          aria-label="link to my linkedin account"
          className="block px-5"
        >
          <IoLogoLinkedin className="text-2xl" />
        </Link>
        <div className="border h-8 lg:h-10 border-gray-100" />
        <Link
          href={`https://www.instagram.com/iam_shoaibmemon/`}
          target="_blank"
          aria-label="link to my instagram account"
          className="block px-5"
        >
          <FaInstagram className="text-2xl" />
        </Link>
        <div className="border h-8 lg:h-10 border-gray-100 hidden md:block" />
        <div className="hidden md:block">
          {/* <Link
            href={"/book-a-call"}
            type="button"
            className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
          >
            Book a Call
          </Link> */}
          <BlackButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
