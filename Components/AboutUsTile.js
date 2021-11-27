import React from "react";
import AnimatedNumber from "animated-number-react";
import { useInView } from "react-intersection-observer";

export default function AboutUsTile({ amount, tileName, text }) {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const formatValue = (number) => Number(number).toFixed(0);
  return (
    <div className={`AboutUs__tile ${tileName}`}>
      <div ref={ref} className="amount items-center">
        <AnimatedNumber
          value={inView ? amount : 0}
          formatValue={formatValue}
          delay={900}
          duration={amount * 3}
          className=""
        />
        +
      </div>
      <p className="descr">{text}</p>
    </div>
  );
}
