import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

import "./Mainbar.css";

function Mainbar() {
  const [main, setMain] = useState(false);
  const handleMain = () => setMain(!main);
  return (
    <div name="home" className={main ? "Mainbar Mainbar-bg" : "Mainbar"}>
      <div className="logo">
        <h2>BOOK MY DOC</h2>
      </div>
      <ul className="my-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="book" smooth={true} duration={500}>
          <li>Consult a doctor</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>Look for your concern</li>
        </Link>
        <Link to="signin" smooth={true} duration={500}>
          <li>Login</li>
        </Link>
        <Link to="footer" smooth={true} duration={500}>
          <li>Others</li>
        </Link>
      </ul>
      <div className="main-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="medical" onClick={handleMain}>
        {!main ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>
      <div className={main ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-main">
          <li>Home</li>
          <li>Consult a doctor</li>
          <li>Tests and checkup</li>
          <li>Login/Register</li>
          <li>Others</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
