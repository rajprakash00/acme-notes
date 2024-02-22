import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavClassName =
    "bg-[#fce5d8] flex flex-col px-5 py-7 absolute top-full left-0 h-screen overflow-hidden transition-all w-full text-center";

  return (
    <header className="sticky top-0 w-full shadow-md md:bg-purple-800 bg-[#fce5d8] text-white p-4 h-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold text-pink">Acme</h1>
        </div>
        {/* mobile nav */}
        <div className="overflow-hidden">
          <div
            className={`md:hidden ${isNavOpen ? showNavClassName : "hidden"}`}
          >
            <ul className="m-0 p-0 list-none font-semibold">
              <li className="mb-5">
                <a href="/whyacme" className="text-purple-800 text-lg">
                  Why Acme
                </a>
              </li>
              <li className="mb-5">
                <a href="/news" className="text-purple-800 text-lg">
                  News
                </a>
              </li>
              <li className="mb-5">
                <a href="/solutions" className="text-purple-800 text-lg">
                  Solutions
                </a>
              </li>
              <li className="mb-5">
                <a href="/pricing" className="text-purple-800 text-lg">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <a
                href="/signup"
                className="py-[14px] px-[45px] text-xl text-white font-semibold bg-pink hover:bg-purple-600 rounded-3xl cursor-pointer text-center"
              >
                Try it for free
              </a>
            </div>
          </div>

          <button
            aria-label="Menu"
            className="flex flex-col justify-around w-6 h-5 bg-transparent"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div
              className={`h-[2px] bg-purple-800 w-6  rounded-lg ${
                isNavOpen ? "origin-[3px_center] rotate-45" : "origin-[3px]"
              }  `}
            ></div>
            <div
              className={`h-[2px] bg-purple-800 w-6  rounded-lg ${
                isNavOpen
                  ? "origin-[3px_center] opacity-0 translate-x-5"
                  : "origin-[3px]"
              }  `}
            ></div>
            <div
              className={`h-[2px] bg-purple-800 w-6  rounded-lg ${
                isNavOpen ? "origin-[3px_center] -rotate-45" : "origin-[3px]"
              }  `}
            ></div>
          </button>
        </div>

        {/* desktop nav */}
        <nav className="space-x-12 font-semibold md:block hidden">
          <a href="/why-acme" className="hover:text-pink">
            Why Acme
          </a>
          <a href="/news" className="hover:text-pink">
            News
          </a>
          <a href="/solutions" className="hover:text-pink">
            Solutions
          </a>
          <a href="/pricing" className="hover:text-pink">
            Pricing
          </a>
          <a
            href="/signup"
            className="bg-[#fce5d8] hover:bg-purple-600 hover:text-pink text-purple-700 font-semibold text-lg px-4 py-2 rounded-3xl"
          >
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
