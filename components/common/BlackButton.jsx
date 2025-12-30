"use client";
import React, { useEffect, useState } from "react";

const BlackButton = () => {
  const [PopupButton, setPopupButton] = useState(null);

  useEffect(() => {
    import("react-calendly").then((mod) => {
      setPopupButton(() => mod.PopupButton);
    });
  }, []);

  if (!PopupButton) return null;

  return (
    <PopupButton
      url="https://calendly.com/smshoaib2001/project-discussion"
      rootElement={document.body}
      text="Book a Call"
      aria-label="Book a free consultation call with Shoaib Muhammad"
      className="
        bg-black text-white inline-block
        text-xs md:text-base lg:text-lg
        px-5 lg:px-8 py-4
        rounded-3xl font-semibold
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black
      "
    />
  );
};

export default BlackButton;
