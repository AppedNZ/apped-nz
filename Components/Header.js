import React from "react";
// import styles from "../styles/Header.module.scss";
const anchors = [
  {
    href: "#services",
    text: "services",
  },
  {
    href: "#portfolio",
    text: "portfolio",
  },
  {
    href: "#contact",
    text: "contact",
  },
];
export default function Header({ scrolled }) {
  return (
    <div className={`Header ${scrolled ? "scrolled" : ""}`}>
      <div className="my-container ">
        <div
          className={`Header__itemsWrapper flex justify-between items-center  ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <img className="Header__logo" src="/assets/logo.svg" alt="Apped NZ" />
          <button className="Header__menuButton">
            Menu <img src="/assets/burger.svg" alt="menu" />
          </button>
          <div className="Header__menuItems">
            {anchors.map((a, i) => (
              <a href={a.href}>{a.text}</a>
            ))}
            <button className="uppercase leading-none py-2.5 px-4 bg-blue text-white font-bold">
              client area
            </button>
            <a className="leading-none text-base" href="phone:0800726543">
              0800 726 543
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
