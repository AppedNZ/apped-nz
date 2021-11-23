import React from "react";
import Slider from "./Slider";
import Heading from "./Heading";
import Brief from "./Brief";
import Button from "./Button";
const ES = "ExampleSection";
export default function ExamplesSection() {
  return (
    <div className="my-container relative">
      <div className={ES}>
        <Heading>
          Examples of <br className="lg:hidden" />{" "}
          <span className="text-blue">our apps</span>
        </Heading>
        <div className={`${ES}__slider relative`}>
          <Slider />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <Brief
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `}
          />
          <Button />
        </div>
      </div>
    </div>
  );
}
