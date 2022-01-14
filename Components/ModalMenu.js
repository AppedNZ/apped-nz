import React from "react";
import Socials from "./Socials";
import { Link } from "react-scroll";
const MM = "ModalMenu";
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
export default function ModalMenu({ showMenu = true, setShowMenu }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -150,
    duration: 500,
    delay: 300,
    activeClass: "active",
    className: "cursor-pointer",
  };
  return (
    <div className={`${MM} ${showMenu ? "active" : ""}`}>
      {anchors.map((anchor, i) => (
        <Link
          key={i}
          to={anchor.href}
          {...linkProps}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          {anchor.text}
        </Link>
      ))}
      <a
        href="https://system.apped.nz/"
        className="uppercase leading-none py-2.5 px-4 bg-blue text-white font-bold"
      >
        client area
      </a>
      <a className="leading-none text-base" href="phone:0800726543">
        0800 726 543
      </a>
      <Socials />
    </div>
  );
}
