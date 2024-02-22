import React, { useState } from "react";

import FeatureContent from "./FeatureContent";

const FeaturesList = [
  {
    id: 1,
    title: "Multimedia notes",
    content: <FeatureContent item="multimedia" />,
  },
  {
    id: 2,
    title: "Work together",
    content: <FeatureContent item="workTogether" />,
  },
  {
    id: 3,
    title: "100% your data",
    content: <FeatureContent item="security" />,
  },
  {
    id: 4,
    title: "24/7 access",
    content: <FeatureContent item="sync" />,
  },
];
const Features = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index: number) => setActiveIndex(index);

  return (
    <section className="lg:px-12 xl:p-16 p-16 mt-16">
      <div className="mx-auto text-center">
        <h2 className="text-4xl text-purple-700 font-bold mb-4 max-w-3xl mx-auto">
          <span className="font-haptikrotalic">Flexible</span> note making tool
          to meet your complex needs{" "}
        </h2>
        <div className="mt-12 flex flex-row  md:justify-center lg:justify-center xl:justify-center gap-8 overflow-x-auto sm:justify-normal">
          {FeaturesList.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleClick(feature.id)}
              className={`font-semibold ${
                activeIndex === feature.id
                  ? "bg-purple-700 font-haptikrotalic px-[23px] py-[12px] rounded-3xl text-[#ffde91]"
                  : "bg-[#ffebbd] px-[23px] py-[12px] rounded-3xl text-purple-700 hover:bg-[#ffe4a7] hover:font-haptikrotalic"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>
        <div>
          {FeaturesList.map((feature) => {
            if (feature.id === activeIndex) {
              return (
                <div key={feature.id} className={`mt-12`}>
                  {feature.content}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

