import React, { useState } from "react";
const GIT = "GetInTouch";
export default function ContactForm({ onSubmit = () => {}, addID = "" }) {
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
        setTimeout(onSubmit, 1000);
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
    <form
      id={addID}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={`${GIT}__contact-form relative`}
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
          className={`${budget === "" ? "text-gray-400" : ""}`}
          onChange={(e) => {
            setBudget(e.target.value);
          }}
        >
          {" "}
          <option className="hidden" value="" disabled selected>
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
  );
}
