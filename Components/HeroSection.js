import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Brief from "./Brief";
import Button from "./Button";
import PhonesGrid from "./PhonesGrid";

const HS = "HeroSection";
export default function HeroSection({ setShowForm }) {
  const { ref, inView } = useInView();
  const [height, setHeight] = useState("min-h-screen");
  useEffect(() => {
    setHeight("");
  }, []);
  return (
    <div className={`${HS} ${height}`}>
      <div className="my-container relative">
        <div className={`${HS}__container`}>
          <h1 className={`${HS}__heading`}>
            Looking for <br />
            an expert <br />
            app developer
            <br />
            <span className="text-blue">
              {" "}
              in New Zealand
              <motion.span
                ref={ref}
                className="inline-block relative"
                initial={{ scale: 1 }}
                animate={inView ? { scale: 3, left: "10%", y: "-55%" } : { scale: 1 }}
                transition={{ delay: 2.5 }}
              >
                ?
              </motion.span>
            </span>
          </h1>
          <Brief
            text={`At Apped NZ, our team of professional app developers specializes in crafting custom mobile applications tailored for both iOS and Android platforms. `}
          />

          <Button
            onClick={() => {
              setShowForm(true);
            }}
            text="get a quote"
          />

          <div className={`${HS}__weDevelopFor`}>
            <img src="/assets/applestore.svg" alt="develop for apple" />
            <img src="/assets/googleplay.svg" alt="develop for google" />
          </div>
        </div>
        <PhonesGrid />
      </div>
    </div>
  );
}
