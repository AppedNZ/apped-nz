import React from "react";

export default function Heading({ align = "center", type = "big", children }) {
  return <p className={`Heading ${align} ${type}`}>{children}</p>;
}
