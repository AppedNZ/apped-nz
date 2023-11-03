import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({ threshold: 1 });
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = { show: { y: 0, opacity: 1 }, hidden: { y: 100, opacity: 0 } };
  return (
    <div className="my-container">
      <div className={S}>
        <Heading type="big" align="left">
          App Development <br className="lg:hidden" />
          <span className="text-blue">Services</span>
        </Heading>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          id="services"
          className={`${S}__services-grid`}
        >
          {services.map((service, i) => (
            <>
              <motion.div variants={item} className={`${S}__service`}>
                <img src={service.icon} alt={service.title} />
                <span>{service.title}</span>
              </motion.div>{" "}
              {i < services.length && (
                <div className="hidden md:block w-0.5  h-full bg-white"></div>
              )}{" "}
            </>
          ))}
        </motion.div>
        <Brief
          text={` Our app developer services include Custom Apps, App Products, App Hosting, and App Design. From initial design to app hosting, our app developers are equipped to handle every aspect with precision and care.
          `}
        />
      </div>
    </div>
  );
}
