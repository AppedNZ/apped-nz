import React from "react";
import Slider from "./Slider";
import Heading from "./Heading";
import Brief from "./Brief";
import Button from "./Button";
import { Link } from "react-scroll";
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
      <div className={ES}>
        <Heading>
          Examples of <br className="lg:hidden" />{" "}
          <span className="text-blue">our apps</span>
        </Heading>
        <div id="portfolio" className={`${ES}__slider relative`}>
          <Slider />
        </div>
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
