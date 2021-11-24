import React from "react";
import ClientSlider from "./ClientsSlider";
import Heading from "./Heading";
const WCS = "WhatClientsSay";
export default function WhatClientsSay() {
  return (
    <div className="my-container">
      <div className={WCS}>
        <Heading>
          What our <span className="text-blue"> clients say</span>
        </Heading>
        <div className="relative pt-10">
          <ClientSlider />
        </div>
      </div>
    </div>
  );
}
