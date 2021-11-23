import React from "react";
import Brief from "./Brief";
import Heading from "./Heading";
const OTC = "OurTrustedClients";
export default function OurTrustedClients() {
  return (
    <div className="my-container">
      <div className={OTC}>
        <Heading>
          Our <span className="text-blue">Trusted </span> Clients
        </Heading>
        <Brief
          text={`Here are some of our customers that have trusted us for app development`}
        />
        <div className={`${OTC}__clients-grid`}>
          <img src="/assets/clients/1.png" alt="Hello Sushi" />
          <img src="/assets/clients/2.png" alt="Ourfffarm" />
          <img src="/assets/clients/3.png" alt="Prawn Park" />
          <img src="/assets/clients/4.png" alt="MainStream" />
          <img src="/assets/clients/5.png" alt="NZ Hops" />
        </div>
      </div>
    </div>
  );
}
