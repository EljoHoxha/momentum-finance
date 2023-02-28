import React from "react";
import DownArrow from "../logo/down.svg";
const DownloadComponent = () => {
  return (
    <div className="download">
      <div className="full-container">
        <div className="download-section">
          <div className="download-section-head">
            <h1 className="download-section-head-title">
              Download the Free Guide:
            </h1>
            <h1 className="download-section-head-subTitle">
              Four Pillars of Early Stage Success
            </h1>
          </div>
          <div className="download-section-body">
            <div className="download-section-body-group">
              <input
                className="download-section-body-input"
                placeholder="First name"
              />
              <input
                className="download-section-body-input"
                placeholder="Last name"
              />
            </div>
            <div className="download-section-body-group">
              <input
                className="download-section-body-input"
                placeholder="Email"
              />
              <button className="download-section-body-btn">
                <img src={DownArrow} />
                <p>Download</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadComponent;
