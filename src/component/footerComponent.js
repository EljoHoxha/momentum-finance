import React from "react";
import MomentumFinance from "../logo/MomentumFinance-logo-footer.svg";
const FooterComponent = ({ homeOnLearnAboutUs, goHomePage }) => {
  return (
    <div className="footer">
      <div className="full-container">
        <div className="footer-section">
          <div className="footer-section-container">
            <div className="footer-section-container-logo">
              <img
                alt=""
                src={MomentumFinance}
                className="footer-section-container-logo-momentumFinance"
                onClick={goHomePage}
              />
              <div className="footer-section-container-logo-group">
                <span className="footer-section-container-logo-group-circle">
                  <p className="footer-section-container-logo-group-circle-item">
                    F
                  </p>
                </span>
                <span className="footer-section-container-logo-group-circle">
                  <p className="footer-section-container-logo-group-circle-item">
                    T
                  </p>
                </span>
                <span className="footer-section-container-logo-group-circle">
                  <p className="footer-section-container-logo-group-circle-item">
                    In
                  </p>
                </span>
              </div>
            </div>
            <div className="footer-section-container-text">
              <div className="footer-section-container-text-menu">
                <h1 className="footer-section-container-text-menu-title">
                  About
                </h1>
                <p
                  className="footer-section-container-text-menu-item"
                  onClick={homeOnLearnAboutUs}
                >
                  About Us
                </p>
                <p className="footer-section-container-text-menu-item">Blog</p>
                <p className="footer-section-container-text-menu-item">
                  Services Page
                </p>
                <p className="footer-section-container-text-menu-item">
                  Contact
                </p>
              </div>
              <div className="footer-section-container-text-menu">
                <h1 className="footer-section-container-text-menu-title">
                  Resources
                </h1>
              </div>
            </div>
          </div>
          <p className="footer-section-copyRight">
            &copy; 2023 Momentum Finance. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
