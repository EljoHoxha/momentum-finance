import React from "react";
import ContactUs from "../images/ContactUs.png";
const ContactUsComponent = ({ contactUs }) => {
  return (
    <div className="contactUsComponent" ref={contactUs}>
      <div className="full-container">
        <div className="contactUsComponent-section">
          <h1 className="contactUsComponent-section-title">Contact Us</h1>
          <div className="contactUsComponent-section-container">
            <div className="contactUsComponent-section-container-img">
              <img
                src={ContactUs}
                className="contactUsComponent-section-container-img-contactUs"
              />
            </div>
            <div className="contactUsComponent-section-container-getInTouch">
              <h1 className="contactUsComponent-section-container-getInTouch-title">
                Get in touch
              </h1>
              <div className="contactUsComponent-section-container-getInTouch-inputs">
                <input
                  className="contactUsComponent-section-container-getInTouch-inputs-item"
                  placeholder="First name"
                />
                <input
                  className="contactUsComponent-section-container-getInTouch-inputs-item"
                  placeholder="Last name"
                />
                <input
                  className="contactUsComponent-section-container-getInTouch-inputs-item"
                  placeholder="Email"
                />
              </div>

              <button className="contactUsComponent-section-container-getInTouch-submit">
                Submit
              </button>
            </div>
          </div>
          <div className="contactUsComponent-section-logo">
            <span className="contactUsComponent-section-logo-circle">
              <p className="contactUsComponent-section-logo-circle-item">T</p>
            </span>
            <span className="contactUsComponent-section-logo-circle">
              <p className="contactUsComponent-section-logo-circle-item">In</p>
            </span>
          </div>
          <p className="contactUsComponent-section-copyRight">
            &copy; 2023 Momentum Finance. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
