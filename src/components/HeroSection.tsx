import React from "react";

import HeroBanner from "../assets/images/home-banner.webp";

const HeroSection = () => {
  return (
    <div className="bg-purple-800 grid grid-cols-12 xl:gap-16 min-h-[85vh] lg:px-12 xl:p-16 p-16 text-center text-white">
      <div className=" xl:col-span-6 col-span-12 xl:text-left mt-12">
        <span className="xl:text-5xl text-3xl font-bold">
          <span className="font-haptikrotalic text-pink">Unleash</span> Your
          Creativity, Master Your Productivity{" "}
        </span>
        <br />
        <br />
        <span className="xl:text-2xl text-xl">
          Transform your projects, elevate collaboration, and carve your path to
          success effortlessly.
        </span>
        <div className="mt-16 flex md:flex-row flex-col gap-8 items-center xl:justify-start justify-center">
          <a
            href="/signup"
            className="py-[14px] px-[45px] xl:text-xl text-xl font-semibold bg-pink hover:bg-purple-600 rounded-3xl cursor-pointer text-center"
          >
            Try it for free
          </a>
          <a
            href="/signup"
            className="py-[14px] px-[25px] xl:text-xl text-xl font-semibold flex gap-3 hover:bg-purple-600 rounded-3xl cursor-pointer text-center"
          >
            <svg viewBox="0 0 165 164" className="w-[26px]">
              <path
                d="M82.5 163.299c45.563 0 82.5-36.555 82.5-81.65C165 36.557 128.063 0 82.5 0S0 36.556 0 81.65c0 45.094 36.937 81.649 82.5 81.649z"
                fill="#FEFBFA"
              ></path>
              <path
                d="M67.106 110.983l46.458-28.391L67.106 54.2v56.782z"
                fill="#2C1338"
              ></path>
            </svg>{" "}
            See how it works
          </a>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6 mt-8 xl:mt-6">
        <img
          src={HeroBanner}
          alt="note-taking"
          className="m-auto block"
          width="100%"
        />
      </div>
    </div>
  );
};

export default HeroSection;
