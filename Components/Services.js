import React from "react";
import Brief from "./Brief";
import Heading from "./Heading";
const S = "Services";
const services = [
  { icon: "/assets/customApps.svg", title: "Custom Apps" },
  { icon: "/assets/appProducts.svg", title: "App Products" },
  { icon: "/assets/appHosting.svg", title: "App Hosting" },
  { icon: "/assets/appDesign.svg", title: "App Design" },
];
export default function Services() {
  return (
    <div className="my-container">
      <div className={S}>
        <Heading type="big" align="left">
          Services that <br className="lg:hidden" />
          <span className="text-blue">we offer</span>
        </Heading>
        <div className={`${S}__services-grid`}>
          {services.map((service, i) => (
            <>
              {" "}
              <div className={`${S}__service`}>
                <img src={service.icon} alt={service.title} />
                <span>{service.title}</span>
              </div>{" "}
              {i < services.length && (
                <div className="hidden md:block w-0.5  h-full bg-white"></div>
              )}{" "}
            </>
          ))}
        </div>
        <Brief
          text={` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown`}
        />
      </div>
    </div>
  );
}
