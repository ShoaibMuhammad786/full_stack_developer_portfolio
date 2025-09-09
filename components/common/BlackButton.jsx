"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

const BlackButton = () => {
  return (
    // <Link
    //   href={"#contact-me"}
    //   type="button"
    //   className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
    // >
    //   Book a Call
    // </Link>
    <PopupButton
      url="https://calendly.com/smshoaib2001/project-discussion"
      rootElement={document.body}
      text="Book a Call"
      className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
    />
  );
};

export default BlackButton;
