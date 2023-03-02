import React, { useState } from "react";
import MomentumFinance from "../logo/MomentumFinance-logo.svg";
const Navbar = ({ learnAboutUs, comehome, onContactUs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  const homeClick = () => {
    setIsOpen(!isOpen);
  };

  const aboutUsClick = () => {
    return isOpen === true && setIsOpen(!isOpen), learnAboutUs();
  };
  const contactUsClick = () => {
    return isOpen === true && setIsOpen(!isOpen), onContactUs();
  };

  return (
    <div className={`navbar ${isOpen && "open"}`} ref={comehome}>
      <div className="navbar-container">
        <div className="navbar-container-section">
          <div className="navbar-container-section-item">
            <img
              alt=""
              className="navbar-container-section-item-img"
              src={MomentumFinance}
              onClick={homeClick}
            />
            <div
              onClick={hamburgerClick}
              className={`navbar-container-section-item-hamburger ${
                isOpen && "open"
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={`navbar-container-section-item  navbar-container-section-item-group`}
          >
            <p className="navbar-container-section-item-text">Blog</p>
            <p
              onClick={aboutUsClick}
              className="navbar-container-section-item-text"
            >
              About Us
            </p>
            <button
              onClick={contactUsClick}
              className="navbar-container-section-item-btn"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
