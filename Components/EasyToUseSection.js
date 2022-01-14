import React from "react";
import Heading from "./Heading";
import Brief from "./Brief";
import MacSlider from "./MacSlider";
const ETU = "EasyToUseSection";

export default function EasyToUseSection() {
  return (
    <div className="my-container">
      <div className={ETU}>
        <div className={`${ETU}__content`}>
          <Heading>
            Easy to use <br />
            <span className="text-blue">Backend admin panels</span>
          </Heading>
          <Brief
            text={`Each one of our mobile apps typically come with a backend admin panel accessible from a web browser. You will be able to login to this admin panel with an admin login and manage all aspects of your mobile app. Typically this is used for user management, reporting, sending push notifications or managing forms or products. Each admin panel is unique and branded for you.`}
          />
        </div>
        <div className={`${ETU}__laptop relative `}>
          <MacSlider />
          <img
            className="z-[2] relative"
            src="/assets/macbook.png"
            alt="backend admin panel"
          />
        </div>
      </div>
    </div>
  );
}
