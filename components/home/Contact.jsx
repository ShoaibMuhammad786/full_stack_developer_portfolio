import React from "react";
import AnimatedText from "../common/AnimatedText";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact-me"
      className="w-full padding-x py-20 lg:pt-28"
      aria-labelledby="contact-heading"
    >
      {/* Section Content */}
      <section className="w-full relative space-y-4">
        <AnimatedText>
          <header>
            <h2 id="contact-heading" className="section-heading">
              <strong className="font-semibold">
                Let’s Build Something Together
              </strong>
            </h2>
          </header>
        </AnimatedText>

        <AnimatedText>
          <p className="main-description lg:w-[85%] text-start text-xl leading-[1.35] secondary-text tracking-tight">
            I’m a{" "}
            <strong className="font-medium">Full Stack MERN Developer</strong>{" "}
            specializing in building fast, scalable, and SEO-friendly web
            applications. Whether you want to start a new project, optimize an
            existing product, or collaborate on innovative ideas — I’m open to
            exciting opportunities.
            <br />
            <br />
            You can reach out using the contact form below or connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/shoaib-muhammad-mern-stack-developer/"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Shoaib Muhammad on LinkedIn"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              href="https://github.com/ShoaibMuhammad786"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Shoaib Muhammad’s GitHub profile"
            >
              GitHub
            </Link>{" "}
            to discuss your project in detail.
          </p>
        </AnimatedText>
      </section>

      {/* Contact Form */}
      <div
        role="form"
        aria-label="Project inquiry contact form"
        className="mt-10"
      >
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
