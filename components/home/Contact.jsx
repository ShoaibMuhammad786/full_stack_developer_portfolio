import React from "react";
import AnimatedText from "../common/AnimatedText";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact-me" className="w-full padding-x py-20 lg:pt-28">
      <section className="w-full relative space-y-4">
        <AnimatedText>
          <h2 className="section-heading">
            <strong className="font-semibold">Get in touch</strong>
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="main-description lg:w-[85%] text-start text-xl leading-[1.3] secondary-text z-10 tracking-tight">
            <strong className="font-normal">
              Whether you’re looking for a Full Stack MERN Developer to create a
              new project, optimize your existing application, or collaborate on
              innovative ideas — I’m always open to exciting opportunities.
              Reach out to me via the contact form or connect with me on{" "}
              <Link
                href={`https://www.linkedin.com/in/shoaib-muhammad-mern-stack-developer/`}
                className="font-medium"
                target="_blank"
                aria-label="link to my linkedin account"
              >
                LinkedIn
              </Link>
              /
              <Link
                className="font-medium"
                href={`https://github.com/ShoaibMuhammad786`}
                target="_blank"
                aria-label="link to my github account"
              >
                GitHub
              </Link>{" "}
              to discuss your project.
            </strong>
          </p>
        </AnimatedText>
      </section>

      <ContactForm />
    </section>
  );
};

export default Contact;
