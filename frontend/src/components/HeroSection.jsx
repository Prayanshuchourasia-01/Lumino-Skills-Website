import React from "react";
import HeroSectionImg from '../images/heroSectionImg.jpg'

export default function HeroSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-12">
      {/* Left Side */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl ml-8 font-bold leading-tight mb-6">
          Find the Perfect <br />Course for Your <br /> Journey — Tailored <br />Just for You
        </h1>
        <div className="flex gap-6 pt-[70px] ml-8">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
            Choice Now
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold flex items-center gap-2">
            <span>⬇</span> Give Feedback
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[600px]">
        <div className="bg-white rounded-full overflow-hidden">
          <img
            src={HeroSectionImg} // replace with your actual image path
            alt="Person at computer illustration"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
