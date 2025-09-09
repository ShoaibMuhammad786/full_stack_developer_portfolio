import React from "react";
import AnimatedText from "./AnimatedText";

const Border = () => {
  return (
    <section className="w-full padding-x">
      <AnimatedText>
        <div className="w-full border mx-auto" />
      </AnimatedText>
    </section>
  );
};

export default Border;
