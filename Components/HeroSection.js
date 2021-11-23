import React from "react";
import Brief from "./Brief";
import Button from "./Button";
import PhonesGrid from "./PhonesGrid";
const HS = "HeroSection";
export default function HeroSection() {
  return (
    <div className={HS}>
      <div className="my-container relative">
        <div className={`${HS}__container`}>
          <p className={`${HS}__heading`}>
            Need a <br className="lg:hidden" />
            mobile <span className="text-blue">app</span>
            <br className="lg:hidden" />
            <span className="text-blue"> developed?</span>
          </p>
          <Brief
            text={`We are a New Zealand App developmzent agency building
            custom mobile apps for iOS and Android. `}
          />
          <Button text="get a quote" />
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
