import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import AnimatedText from "../common/AnimatedText";

const Footer = () => {
  return (
    <footer
      className="w-full flex items-center justify-center pb-10 overflow-hidden"
      role="contentinfo"
      aria-label="Website footer"
    >
      <AnimatedText>
        <nav
          className="flex items-center justify-center gap-2 px-2 bg-white mx-auto"
          aria-label="Footer navigation and social links"
        >
          {/* Home */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="block px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black rounded-full"
          >
            <TiHomeOutline className="text-2xl" aria-hidden="true" />
          </Link>

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
        </nav>
      </AnimatedText>
    </footer>
  );
};

export default Footer;
