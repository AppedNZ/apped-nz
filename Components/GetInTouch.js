import React, { useState } from "react";
import Brief from "./Brief";
import ContactForm from "./ContactForm";
import Heading from "./Heading";
const GIT = "GetInTouch";
const contacts = [
  {
    icon: "/assets/phone.svg",
    type: "phone",
    href: "phone:0800726543",
    text: "0800 726 543",
  },
  {
    icon: "/assets/email.svg",
    type: "email",
    href: 'mailto:"hello@apped.nz',
    text: "hello@apped.nz",
  },
  { icon: "/assets/location.svg", type: "address", text: "Tauranga, New Zealand" },
];

export default function GetInTouch() {
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
        className="bubble w-1/6 h-auto absolute top-[85%] left-[-15%]"
        src="/assets/bubble.svg"
        alt="bubble"
      />{" "}
      <img
        style={{ animationDelay: "1.4s" }}
        className="bubble w-1/8 h-auto absolute top-[55%] right-[-10px]"
        src="/assets/bubble.svg"
        alt="bubble"
      />
      <div className={GIT}>
        <div className={`${GIT}__contacts`}>
          <Heading>
            get in touch <span className="text-blue">with us</span>
          </Heading>
          <Brief text={`Please fill out the below form and we will be in touch ASAP.`} />
          <div className={`${GIT}__contactTypes`}>
            {contacts.map((c, i) => (
              <div key={i} className={`${GIT}__contact`}>
                <img src={c.icon} alt="contact icon" />
                <p>
                  <span className="capitalize mr-1">{c.type}:</span>{" "}
                  {c.href ? (
                    <a className={c.type === "email" ? "underline" : ""} href={c.href}>
                      {c.text}
                    </a>
                  ) : (
                    c.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm addID="contact" />
      </div>
    </div>
  );
}
