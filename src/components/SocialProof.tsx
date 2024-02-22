import React from "react";

import desktopBrands from "../assets/images/brands-mixed-desktop-light.png";
import mobileBrands from "../assets/images/brands-mixed-mobile-light.png";

const SocialProof = () => {
  return (
    <div className="p-7 text-center bg-purple-700">
      <div className="m-auto flex items-center justify-center">
        <img
          src={desktopBrands}
          alt="all trusted brand partners "
          className="hidden xl:block lg:block "
          width="60%"
        />
        <img
          src={mobileBrands}
          alt="all trusted brand partners "
          className="lg:hidden xl:hidden"
          width="50%"
        />
      </div>
    </div>
  );
};

export default SocialProof;
