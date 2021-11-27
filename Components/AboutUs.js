import React from "react";
import Brief from "./Brief";
import Heading from "./Heading";
import AboutUsTile from "./AboutUstile";
export default function AboutUs() {
  const tiles = [
    { tileName: "apps", amount: 500, text: "Developed Applications" },
    { tileName: "customers", amount: 800, text: "Satisfied Customers" },
    { tileName: "panels", amount: 450, text: "Developed Admin Panels" },
    { tileName: "times", amount: 250, text: "Times Recommended" },
  ];
  return (
    <div id="about " className="relative z-10">
      <div className="my-container">
        <Heading type="big" align="left">
          About <span className="text-blue">us</span>
        </Heading>
        <div className="flex flex-col lg:flex-row items-center AboutUs gap-5">
          <div className="grid grid-cols-2 gap-5 w-full lg:w-1/2">
            {tiles.map((t, i) => (
              <AboutUsTile key={i} {...t} />
            ))}
          </div>
          <Brief
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
          />
        </div>
      </div>
    </div>
  );
}
