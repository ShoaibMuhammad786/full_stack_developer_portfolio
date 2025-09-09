import React from "react";
import AnimatedText from "../common/AnimatedText";

const TestimonialCard = () => {
  return (
    <AnimatedText>
      <div className="min-w-[430px] bg-[#f9f9f9] py-7 px-9 rounded-2xl border border-gray-100">
        <p className="text-lg leading-[1.2]">
          <strong className="font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            fugiat iste velit numquam suscipit alias quaerat at temporibus quasi
            cum earum rerum tenetur, facilis reprehenderit!
          </strong>
        </p>

        <div className="flex items-center gap-2 mt-5">
          <img
            src="/profile-picture.jpg"
            alt="profile picture"
            width={45}
            height={45}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col items-start">
            <p className="font-semibold">
              <strong className="font-semibold">Ethan Smith</strong>
            </p>
            <p className="text-xs">
              <strong className="font-normal">CEO, Co-Founder</strong>
            </p>
          </div>
        </div>
      </div>
    </AnimatedText>
  );
};

export default TestimonialCard;
