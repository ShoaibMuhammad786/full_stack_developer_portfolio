import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import AnimatedText from "../common/AnimatedText";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center pb-10 overflow-hidden">
      <AnimatedText>
        <div className="flex items-center justify-center gap-2 px-2 bg-white mx-auto">
          <Link href={`/`} aria-label="link to home page" className="block px-5">
            <TiHomeOutline className="text-2xl" />
          </Link>

          <Link
            href={`https://github.com/ShoaibMuhammad786`}
            target="_blank"
            aria-label="link to my github account"
            className="block px-5"
          >
            <FaGithub className="text-2xl" />
          </Link>

          <Link
            href={`https://www.linkedin.com/in/shoaib-muhammad-mern-stack-developer/`}
            target="_blank"
            aria-label="link to my linkedin account"
            className="block px-5"
          >
            <IoLogoLinkedin className="text-2xl" />
          </Link>

          <Link
            href={`https://www.instagram.com/iam_shoaibmemon/`}
            target="_blank"
            aria-label="link to my instagram account"
            className="block px-5"
          >
            <FaInstagram className="text-2xl" />
          </Link>
        </div>
      </AnimatedText>
    </footer>
  );
};

export default Footer;
