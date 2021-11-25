import React, { useState } from "react";
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

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      budget,
      message,
    };
    console.log(data);
    fetch("/api/hello", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setMessage("");
      }
    });
  };
  const inputs = [
    {
      icon: "/assets/inputs/name.svg",
      inputProps: {
        name: "name",
        type: "text",
        required: true,
        placeholder: "Name",
        value: name,
        onChange: (e) => {
          setName(e.target.value);
        },
      },
    },
    {
      icon: "/assets/inputs/email.svg",
      inputProps: {
        name: "email",
        type: "email",
        required: true,
        placeholder: "Email",
        value: email,
        onChange: (e) => {
          setEmail(e.target.value);
        },
      },
    },
    {
      icon: "/assets/inputs/phone.svg",
      inputProps: {
        name: "phone",
        type: "text",
        required: true,
        placeholder: "Phone",
        value: phone,
        onChange: (e) => {
          setPhone(e.target.value);
        },
      },
    },
  ];
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
        <form
          id="contact"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={`${GIT}__contact-form`}
        >
          {inputs.map((input) => (
            <div key={input.inputProps.name} className="inputWrapper">
              <input {...input.inputProps} />
              <img src={input.icon} alt={input.inputProps.name} />
            </div>
          ))}

          <div className="inputWrapper">
            <img src="/assets/inputs/budget.svg" alt="budget" />
            <select
              required
              placeholder="Choose Budget"
              value={budget}
              onChange={(e) => {
                setBudget(e.target.value);
              }}
            >
              {" "}
              <option value="" disabled selected>
                Choose Your Budget
              </option>
              <option value="Under $5K">Under $5K</option>
              <option value="$5K to $10K">$5K to $10K</option>
              <option value="$10K - $20K">$10K - $20K</option>
              <option value="$20K - $30K">$20K - $30K</option>
              <option value="More than $30K">More than $30K</option>
            </select>
          </div>
          <div className="inputWrapper w-full comment wide">
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="resize-none w-full text-area"
              rows={4}
              placeholder="What do you need the app to do?"
            />
          </div>
          <button type="submit" className={`button-submit wide `}>
            {submitted ? "Thank You:)" : "Get a quote"}
          </button>
        </form>
      </div>
    </div>
  );
}
