import React from "react";
import CfoImg from "../images/CFO-TEAM.png";
import StafImg from "../images/stafImg.png";
const CFOTeamComponent = ({ aboutUs, clickContactUs }) => {
  return (
    <div className="cfoTeam" ref={aboutUs}>
      <div className="full-container">
        <div className="cfoTeam-section">
          <div className="cfoTeam-section-head">
            <div className="cfoTeam-section-head-container">
              <h1 className="cfoTeam-section-head-container-title">
                The Momentum CFO Team
              </h1>
              <div className="cfoTeam-section-head-container-description">
                <p className="cfoTeam-section-head-container-description-text">
                  High-growth startup founders often get stuck trying to do
                  their own accounting. This can be a big problem for them, but
                  it doesn’t have to be.
                </p>
                <p className="cfoTeam-section-head-container-description-text">
                  We believe you shouldn’t have to be a financial wizard to run
                  a successful start-up. We understand what you’re going
                  through, which is why with over 80 years of combined
                  experience, we’ve been helping business founders be confident
                  in their finances.
                </p>
                <button
                  className="cfoTeam-section-head-container-btn"
                  onClick={clickContactUs}
                >
                  Schedule a Call
                </button>
              </div>
            </div>
            <div className="cfoTeam-section-head-img">
              <img src={CfoImg} className="cfoTeam-section-head-img-cfo" />
            </div>
          </div>
          <div className="cfoTeam-section-body">
            <h1 className="cfoTeam-section-body-title">
              The Momentum CFO Team
            </h1>
            <div className="cfoTeam-section-body-container">
              <img
                className="cfoTeam-section-body-container-img"
                alt=""
                src={StafImg}
              />
              <img
                className="cfoTeam-section-body-container-img"
                alt=""
                src={StafImg}
              />
              <img
                className="cfoTeam-section-body-container-img"
                alt=""
                src={StafImg}
              />
              <img
                className="cfoTeam-section-body-container-img"
                alt=""
                src={StafImg}
              />

              <img
                className="cfoTeam-section-body-container-img"
                alt=""
                src={StafImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFOTeamComponent;
