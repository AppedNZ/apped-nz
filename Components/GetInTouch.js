import React from "react";
import Brief from "./Brief";
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
const inputs = [
  {
    icon: "/assets/inputs/name.svg",
    inputProps: {
      name: "name",
      type: "text",
      required: true,
      placeholder: "Name",
    },
  },
  {
    icon: "/assets/inputs/email.svg",
    inputProps: {
      name: "email",
      type: "email",
      required: true,
      placeholder: "Email",
    },
  },
  {
    icon: "/assets/inputs/phone.svg",
    inputProps: {
      name: "phone",
      type: "text",
      required: true,
      placeholder: "Phone",
    },
  },
  {
    icon: "/assets/inputs/budget.svg",
    inputProps: {
      name: "budget",
      type: "text",
      required: false,
      placeholder: "Budget",
    },
  },
];
export default function GetInTouch() {
  return (
    <div className="my-container">
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
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
          className={`${GIT}__contact-form`}
        >
          {inputs.map((input) => (
            <div key={input.inputProps.name} className="inputWrapper">
              <input {...input.inputProps} />
              <img src={input.icon} alt={input.inputProps.name} />
            </div>
          ))}
          <div className="inputWrapper w-full">
            <textarea
              className="resize-none w-full text-area"
              rows={4}
              placeholder="What do you need the app to do?"
            />
          </div>
          <button type="submit" className={`button-submit`}>
            Get a quote
          </button>
        </form>
      </div>
    </div>
  );
}
