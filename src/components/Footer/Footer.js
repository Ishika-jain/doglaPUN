import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div name="footer" className="footer">
      <div className="container">
        <div className="top">
          <h3>BOOK MY DOC.</h3>
          <div className="social">
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
