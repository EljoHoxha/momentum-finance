import React from "react";

const SubscribeComponent = () => {
  return (
    <div className="subscribe">
      <div className="full-container">
        <div className="subscribe-section">
          <button className="subscribe-section-btn">Subscribe</button>
          <div className="subscribe-section-container">
            <div className="subscribe-section-container-head">
              <h1 className="subscribe-section-container-head-title">
                TEMPLATE for PAGES:
              </h1>
              <h1 className="subscribe-section-container-head-title">
                Services / Resources / Updates & Blog
              </h1>
            </div>
            <div className="subscribe-section-container-footer">
              <div className="subscribe-section-container-footer-logo">
                <span className="subscribe-section-container-footer-logo-circle">
                  <p className="subscribe-section-container-footer-logo-circle-item">
                    F
                  </p>
                </span>
                <span className="subscribe-section-container-footer-logo-circle">
                  <p className="subscribe-section-container-footer-logo-circle-item">
                    T
                  </p>
                </span>
                <span className="subscribe-section-container-footer-logo-circle">
                  <p className="subscribe-section-container-footer-logo-circle-item">
                    In
                  </p>
                </span>
              </div>
              <p className="subscribe-section-container-footer-copyRight">
                &copy; 2023 Momentum Finance. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
