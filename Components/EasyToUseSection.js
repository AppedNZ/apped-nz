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
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting`}
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
