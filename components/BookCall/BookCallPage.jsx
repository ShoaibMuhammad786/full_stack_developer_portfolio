"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PopupButton = dynamic(
  () => import("react-calendly").then(mod => mod.PopupButton),
  { ssr: false } // 🚀 disable server-side rendering for this import
);

const BookCallPage = () => {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.body);
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-center gap-5 relative padding-x pb-20 pt-32 lg:pb-32 lg:pt-40 2xl:pt-52">
      <div className="w-full mt-10">
        {root && (
          <PopupButton
            url="https://calendly.com/smshoaib2001/project-discussion"
            rootElement={root}
            text="Book a Call"
            className="bg-black text-white inline-block text-xs md:text-base lg:text-lg px-5 lg:px-8 py-4 rounded-3xl font-semibold"
          />
        )}
      </div>
    </div>
  );
};

export default BookCallPage;
