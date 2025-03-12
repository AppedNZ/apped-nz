import React from "react";
import { Link } from "react-scroll";
import Burger from "./Burger";
const linkProps = {
  spy: true,
  smooth: true,
  offset: -200,
  duration: 600,
  delay: 100,
  activeClass: "active",
  className: "cursor-pointer link",
};
const anchors = [
  {
    href: "about",
    text: "About",
  },
  {
    href: "services",
    text: "services",
  },

  {
    href: "examples",
    text: "Examples",
  },
  {
    href: "contact",
    text: "contact",
  },
];
export default function Header({ scrolled, showMenu, setShowMenu }) {
  return (
    <div className={`Header ${scrolled ? "scrolled" : ""}`}>
      <div className="my-container ">
        <div
          className={`Header__itemsWrapper flex justify-between items-center  ${
            scrolled || showMenu ? "scrolled" : ""
          }`}>
          <Link style={{ width: 94, display: "inline-block" }} {...linkProps} to="top">
            <img className="Header__logo" src="/assets/logo.svg" alt="Apped NZ" />
          </Link>
          <button
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            className="Header__menuButton">
            Menu
            <Burger showMenu={showMenu} />
            {/* <img src="/assets/burger.svg" alt="menu" /> */}
          </button>
          <div className="Header__menuItems">
            {anchors.map((anchor, i) => (
              <Link
                key={i}
                to={anchor.href}
                {...linkProps}
                onClick={() => {
                  setShowMenu(false);
                }}>
                {anchor.text}
              </Link>
            ))}
            <a
              href="https://system.apped.nz/"
              className="client uppercase leading-none py-2.5 px-4 bg-blue text-white font-bold">
              client area
            </a>
            {/* <a className="leading-none text-base phone relative" href="tel:+640211695214">
              <span className="number"> 021 169 5214</span>{" "}
              <img className="phone-icon" src="/assets/phone.svg" alt="make a call" />
            </a> */}
            <a className="leading-none text-base phone relative" href="mailto:hello@apped.nz">
              <span className="number">hello@apped.nz</span>{" "}
              {/* <img className="phone-icon" src="/assets/mail.svg" alt="make a call" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
