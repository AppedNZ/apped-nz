import React from "react";
import Slider from "./Slider";
import Heading from "./Heading";
import Brief from "./Brief";
import Button from "./Button";
import { Link } from "react-scroll";
import Tiles from "./Tiles";
const ES = "ExampleSection";
export default function ExamplesSection() {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -200,
    duration: 600,
    delay: 100,
    activeClass: "active",
  };
  return (
    <div className="my-container relative">
      <img
        style={{ animationDelay: " 2.6s" }}
        className="bubble w-1/12 h-auto absolute top-0 right-4"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "1.3s" }}
        className="bubble w-1/12 h-auto absolute top-10 left-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "2.3s" }}
        className="bubble w-1/6 h-auto absolute top-[45%] left-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "1.4s" }}
        className="bubble w-1/8 h-auto absolute top-[55%] right-0"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <div className={ES}>
        <Heading>
          Examples of <br className="lg:hidden" />{" "}
          <span className="text-blue">our apps</span>
        </Heading>
        <Tiles />
        {/* <div id="portfolio" className={`${ES}__slider relative`}>
          <Slider />
        </div> */}
        <div className="grid md:grid-cols-[3fr,2fr]  md:gap-10">
          <Brief
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `}
          />{" "}
          <Link {...linkProps} to="contact">
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
}
