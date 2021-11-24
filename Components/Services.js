import React from "react";
import Brief from "./Brief";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
          Services that <br className="lg:hidden" />
          <span className="text-blue">we offer</span>
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
          text={` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown`}
        />
      </div>
    </div>
  );
}
