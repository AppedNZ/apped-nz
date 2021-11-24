import React from "react";
import { motion } from "framer-motion";
// .phone:nth-of-type(1) {
//   left: 0%;
//   transform: translateY(80%) translateX(-53%) rotate(90deg);
// }
// .phone:nth-of-type(2) {
//   left: 16%;
//   transform: translateY(0%);
// }
// .phone:nth-of-type(3) {
//   left: 32%;
//   transform: translateY(-50%);
// }
// .phone:nth-of-type(4) {
//   left: 0%;
//   transform: translateY(160%);
// }
// .phone:nth-of-type(5) {
//   left: 16%;
//   transform: translateY(105%);
// }
// .phone:nth-of-type(6) {
//   left: 32%;
//   transform: translateY(55%);
// }
export default function PhonesGrid() {
  const commonTransitionProps = {
    repeatType: "mirror",
    repeat: "Infinity",
    duration: 0.5,
  };
  return (
    <div className="PhonesGrid">
      <motion.img
        animate={{
          y: ["80%", "80%"],
          rotate: [90, 90],
          x: ["-53%", "-51%"],
        }}
        transition={{
          ...commonTransitionProps,
          repeatDelay: 2.2,
        }}
        className="phone"
        src="/assets/apps/airport.png"
        alt="phone app"
      />
      <motion.img
        animate={{
          y: ["0%", "-5%"],
          x: ["0%", "0%"],
        }}
        transition={{
          ...commonTransitionProps,
          repeatDelay: 1.2,
        }}
        className="phone"
        src="/assets/apps/olympus.png"
        alt="phone app"
      />
      <motion.img
        animate={{
          y: ["-50%", "-55%"],
        }}
        transition={{
          ...commonTransitionProps,
          repeatDelay: 1.2,
          delay: 1.6,
        }}
        className="phone"
        src="/assets/apps/harwood.png"
        alt="phone app"
      />
      <motion.img
        animate={{
          y: ["160%", "157%"],
        }}
        transition={{
          ...commonTransitionProps,
          repeatDelay: 1.2,
        }}
        className="phone"
        src="/assets/apps/food_truck.png"
        alt="phone app"
      />
      <motion.img
        animate={{
          y: ["105%", "101%"],
        }}
        transition={{
          ...commonTransitionProps,
          repeatDelay: 1.2,
          delay: 0.5,
        }}
        className="phone"
        src="/assets/apps/bookitin247.png"
        alt="phone app"
      />
      <motion.img
        animate={{
          y: ["55%", "51%"],
        }}
        transition={{
          ...commonTransitionProps,
          repeatDelay: 1.2,
          delay: 2.1,
        }}
        className="phone"
        src="/assets/apps/openHomes.png"
        alt="phone app"
      />
      <motion.img
        className="nz-borders hidden lg:block"
        src="/assets/nz_borders.png"
        alt="NZ"
      />
    </div>
  );
}
