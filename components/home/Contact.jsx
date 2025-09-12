import React from "react";
import AnimatedText from "../common/AnimatedText";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact-me" className="w-full padding-x py-20 lg:pt-40">
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

      <form className="w-full mt-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedText>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-[#f9f9f9] px-5 py-4 outline-none text-lg rounded-xl w-full"
            />
          </AnimatedText>
          <AnimatedText>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#f9f9f9] px-5 py-4 outline-none text-lg rounded-xl w-full"
            />
          </AnimatedText>
        </div>
        <div className="w-full mt-6">
          <AnimatedText>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Write your message..."
              className="w-full bg-[#f9f9f9] rounded-xl px-5 py-4 text-lg outline-none"
            ></textarea>
          </AnimatedText>
        </div>

        <div className="w-full mt-5">
          <AnimatedText>
            <button
              type="button"
              className="w-full bg-black text-white text-lg px-8 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </AnimatedText>
        </div>
      </form>
    </section>
  );
};

export default Contact;
