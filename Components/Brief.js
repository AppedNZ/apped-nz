import React from "react";

export default function Brief({ text = "", children }) {
  return <p className="Brief">{children ?? text}</p>;
}
