import { Link } from "react-scroll";
import Socials from "./Socials";
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
          }}>
          {anchor.text}
        </Link>
      ))}
      <a
        href="https://system.apped.nz/"
        className="uppercase leading-none py-2.5 px-4 bg-blue text-white font-bold">
        client area
      </a>

      <a className="leading-none text-base " href="tel:+640211695214">
        <span className="number"> 021 169 5214</span>{" "}
      </a>

      <Socials />
    </div>
  );
}
