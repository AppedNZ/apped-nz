import React from "react";

export default function Button({ text = "get a quote", addClass = "", ...props }) {
  return (
    <button {...props} className={`Button ${addClass}`}>
      {text}
    </button>
  );
}
