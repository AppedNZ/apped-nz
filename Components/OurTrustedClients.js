import React from "react";
import Brief from "./Brief";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const OTC = "OurTrustedClients";
export default function OurTrustedClients() {
  const { ref, inView } = useInView({ threshold: 0.6 });
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
  const item = { show: { x: 0, opacity: 1 }, hidden: { x: -100, opacity: 0 } };
  return (
    <div className="my-container relative">
      <img
        style={{ animationDelay: "1.3s" }}
        className="bubble w-1/12 h-auto absolute top-10 left-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "2.3s" }}
        className="bubble w-1/6 h-auto absolute top-[45%] right-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <div className={OTC}>
        <Heading>
          Our <span className="text-blue">Trusted </span> Clients
        </Heading>
        <Brief
          text={`Here are some of our customers that have trusted us for app development`}
        />
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`${OTC}__clients-grid`}
        >
          <motion.img
            key={1}
            variants={item}
            src="/assets/clients/1.png"
            alt="Hello Sushi"
          />
          <motion.img
            key={2}
            variants={item}
            src="/assets/clients/2.png"
            alt="Ourfffarm"
          />
          <motion.img
            key={3}
            variants={item}
            src="/assets/clients/3.png"
            alt="Prawn Park"
          />
          <motion.img
            key={4}
            variants={item}
            src="/assets/clients/4.png"
            alt="MainStream"
          />
          <motion.img key={5} variants={item} src="/assets/clients/5.png" alt="NZ Hops" />
        </motion.div>
      </div>
    </div>
  );
}
