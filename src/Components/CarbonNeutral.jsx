import React from "react";
import carbon from "../assets/images/icon-carbon-neutral.svg";
const CarbonNeutral = () => {
  return (
    <div className="carbon">
      <img className="neutral-img" src={carbon} alt="carbon-image" />
      <p>
        This is a <span className="para-neutral">carbon-neutral </span>delivery
      </p>
    </div>
  );
};

export default CarbonNeutral;
