import React from "react";
import MomentumFinance from "../logo/MomentumFinance-logo.svg";
const Navbar = ({ learnAboutUs, comehome, onContactUs }) => {
  return (
    <div className="navbar" ref={comehome}>
      <div className="full-container">
        <div className="navbar-section">
          <div className="navbar-section-item">
            <img
              alt=""
              className="navbar-section-item-img"
              src={MomentumFinance}
            />
          </div>
          <div className="navbar-section-item  navbar-section-item-group">
            <p className="navbar-section-item-text">Blog</p>
            <p onClick={learnAboutUs} className="navbar-section-item-text">
              About Us
            </p>
            <button onClick={onContactUs} className="navbar-section-item-btn">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
