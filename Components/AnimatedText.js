import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <div>
      <TypeAnimation
        sequence={["app developer", 1500, "app designer", 1500, "software dev", 1500]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        // style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
}
