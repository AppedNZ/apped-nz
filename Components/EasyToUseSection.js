import React from "react";
import Brief from "./Brief";
import Heading from "./Heading";
import MacSlider from "./MacSlider";
const ETU = "EasyToUseSection";

export default function EasyToUseSection() {
  return (
    <div className="my-container">
      <div className={ETU}>
        <div className={`${ETU}__content`}>
          <Heading>
            User-Friendly <br />
            <span className="text-blue">Backend admin panels</span>
          </Heading>
          <Brief
            text={`Our app development includes creating intuitive backend admin panels for easy management of your app's content and users.`}
          />
        </div>
        <div className={`${ETU}__laptop relative `}>
          <MacSlider />
          <img className="z-[2] relative" src="/assets/macbook.png" alt="backend admin panel" />
        </div>
      </div>
    </div>
  );
}
