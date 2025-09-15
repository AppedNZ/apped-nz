import { useInView } from "react-intersection-observer";
import Counter from "./Counter";
export default function AboutUsTile({ amount, tileName, text, removePlus, duration }) {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const formatValue = (number) => Number(number).toFixed(0);
  return (
    <div className={`AboutUs__tile ${tileName}`}>
      <div className="amount items-center">
        <Counter number={amount} />
        {tileName === "times" && "%"}
        {!removePlus && "+"}
      </div>
      <p ref={ref} className="descr">
        {text}
      </p>
    </div>
  );
}
