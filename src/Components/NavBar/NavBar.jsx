// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./NavBar.css";
import tlogo from "../../assets/tlogo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menuicon.png";
const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 660 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={tlogo} alt="" className="tlogo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="first" smooth={true} offset={0} duration={500}>
            Home
          </Link>
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
        <li>
          <Link to="Services" smooth={true} offset={-260} duration={500}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="Services" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        {/* <li>
          <Link to="YOECC" smooth={true} offset={-260} duration={500}>
            About Us
          </Link>
        </li> */}
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menuicon} alt="" className="menuicon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
