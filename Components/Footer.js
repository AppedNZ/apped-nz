import React from "react";
//import Socials from "./Socials";
const F = "Footer";
export default function Footer() {
  return (
    <div className="my-container">
      <div className={F}>
        <img className="Footer__logo" src="/assets/logo.svg" alt="Apped NZ" />
        <div className={`${F}__socials`}>{/* <Socials /> */}</div>
      </div>
    </div>
  );
}
