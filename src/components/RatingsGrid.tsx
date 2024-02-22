import React from "react";

import Capterra from "../assets/images/award-capterra.png";
import { RatingsContent } from "../constants/RatingsContent";
import RatingsGridCard from "./RatingsGridCard";

const RatingsGrid = () => {
  return (
    <div className="bg-[#fdf1ec] lg:px-12 xl:p-16 p-16 text-center">
      <h2 className="text-4xl text-purple-700 font-bold max-w-3xl mx-auto">
        <span className="font-haptikrotalic">Why</span> 50,000+ users started
        using Acme note in the last 30 days
      </h2>
      <div className="grid lg:grid-flow-dense md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        <div className="lg:col-start-2 lg:col-end-3 md:col-span-2 text-center m-auto block ">
          <img
            src={Capterra}
            alt="capterra award for ease of use"
            width="220px"
            loading="lazy"
          />
        </div>

        {RatingsContent.map((content, id) => (
          <RatingsGridCard
            key={id}
            title={content.title}
            subtitle={content.subtitle}
            review={content.review}
            user={content.review}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingsGrid;
