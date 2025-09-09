"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

const BookCallPage = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-5 relative padding-x pb-20 pt-32 lg:pb-32 lg:pt-40 2xl:pt-52">
      <div className="w-full mt-10">
        {/* <InlineWidget url="https://calendly.com/smshoaib2001/project-discussion" /> */}
        <PopupButton
          url="https://calendly.com/smshoaib2001/project-discussion"
          rootElement={document.body}
          text="Book a Call"
          className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
        />
      </div>
    </div>
  );
};

export default BookCallPage;
