// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./NavBars.css";
import tlogo from "../Service/assets/tlogo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menuicon.png";
const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 120 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <navi className={`container ${sticky ? "dark-nav" : ""}`}>
      <a href ="/">
      <img src={tlogo} alt="" className="tlogo" />
      </a>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
        <a href ="/">
            Home
          </a>
        </li>
        <li className="service">
          <Link className='service-trigger' to="Service" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
          <div className="service-content">
            <p><a href="/service/enterprise-security">Enterprise Secuirty</a></p>
            <p><a href="/service/cloud-security">Cloud Security</a></p>
            <p><a href = "/service/cyber-security">Cyber Security</a></p>
            <p><a href="/service/additional-services">Additional</a></p>
          </div>
        </li>
      </ul>
      <img src={menuicon} alt="" className="menuicon" onClick={toggleMenu} />
    </navi>
  );
};

export default NavBar;
