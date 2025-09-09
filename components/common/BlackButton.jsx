"use client";
import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

const BlackButton = () => {
  const [PopupButton, setPopupButton] = useState(null);

  useEffect(() => {
    import("react-calendly").then((mod) => {
      setPopupButton(() => mod.PopupButton);
    });
  }, []);

  return (
    // <Link
    //   href={"#contact-me"}
    //   type="button"
    //   className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
    // >
    //   Book a Call
    // </Link>
    PopupButton && (
      <PopupButton
        url="https://calendly.com/smshoaib2001/project-discussion"
        rootElement={document.body}
        text="Book a Call"
        className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
      />
    )
  );
};

export default BlackButton;
