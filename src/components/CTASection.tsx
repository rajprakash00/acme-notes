import React from "react";

const CTASection = () => {
  return (
    <div className="text-center lg:px-12 xl:p-16 p-16 ctaSection">
      <div className="md:max-w-6xl m-auto">
        <div className="flex flex-col gap-5 max-w-3xl m-auto text-center my-12">
          <h2 className="text-4xl text-purple-800 font-bold mx-auto">
            <span className="font-haptikrotalic">Discover</span> how Acme Note
            can help you build a better business with higher profits and happy
            teams
          </h2>
          <p className="text-purple-500">
            All plans come with a free, 30-day trial of Acme Note Premium — no
            credit card required. Upgrade at the end of the trial or continue
            using for free.
          </p>
          <div className="mt-10 text-center">
            <a href='/signup' className="py-[14px] px-[45px] xl:text-xl text-xl text-white font-semibold bg-pink hover:bg-purple-600 rounded-3xl cursor-pointer text-center">
              Try it for free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
