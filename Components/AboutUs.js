import React from "react";
import AboutUsTile from "./AboutUsTile";
import Brief from "./Brief";
import Heading from "./Heading";
export default function AboutUs() {
  const tiles = [
    {
      tileName: "apps",
      amount: 150,
      text: "Developed Applications",
      removePlus: false,
      duration: 1500,
    },
    {
      tileName: "customers",
      amount: 10,
      text: "Years Experience",
      removePlus: true,
      duration: 2000,
    },
    {
      tileName: "panels",
      amount: 8,
      text: "Weeks Typical Dev Time",
      removePlus: true,
      duration: 1500,
    },
    {
      tileName: "times",
      amount: 100,
      text: "Committed",
      removePlus: true,
      duration: 2000,
    },
  ];
  return (
    <div id="about" className="relative z-10">
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
          <div className="AboutUs__textPart ">
            <h2 className="text-white text-4xl font-bold pb-5 ">App Developers with a Mission</h2>
            <Brief
              text={`As seasoned app developers, we've successfully delivered numerous applications across various sectors. Our app development process is both streamlined and comprehensive, ensuring your vision comes to life efficiently and effectively.
              `}
            />
            <br />
            <Brief
              text={`We have a simple yet effective process for building our mobile apps which starts by designing a great UI/UX for approval, moving to development of the app and admin panel for iOS and Android, and approval of a backend admin panel in which you can manage all aspects of your project. 
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
