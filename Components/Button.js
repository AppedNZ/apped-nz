import React from "react";

export default function Button({ text = "get a quote", addClass = "" }) {
  return <button className={`Button ${addClass}`}>{text}</button>;
}
