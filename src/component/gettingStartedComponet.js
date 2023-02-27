import React from "react";
import ScheduleACall from "../images/ScheduleACall.png";
import EngageBusiness from "../images/EngageBusiness.png";
import FollowAction from "../images/FollowAction.png";
const GettingStartedComponent = ({ clickContactUs }) => {
  return (
    <div className="gettingStarted">
      <div className="full-container">
        <div className="gettingStarted-section">
          <h1 className="gettingStarted-section-title">
            Getting Started is Simple
          </h1>

          <div className="gettingStarted-section-body">
            <div className=" gettingStarted-section-body-content">
              <div className=" gettingStarted-section-body-content-image">
                <img
                  className="gettingStarted-section-body-content-image-shadow"
                  src={ScheduleACall}
                />
              </div>
              <div className=" gettingStarted-section-body-content-description">
                <h1 className="gettingStarted-section-body-content-description-title">
                  1. Schedule a call
                </h1>
                <p className="gettingStarted-section-body-content-description-paragraph">
                  We listen to you. We’ll talk live to understand your goals,
                  your business and your needs.
                </p>
              </div>
            </div>
            <div className="gettingStarted-section-body-content gettingStarted-section-body-content-border">
              <div className=" gettingStarted-section-body-content-image">
                <img
                  className="gettingStarted-section-body-content-image-shadow"
                  src={EngageBusiness}
                />
              </div>
              <div className=" gettingStarted-section-body-content-description">
                <h1 className="gettingStarted-section-body-content-description-title">
                  2. Engage with your business
                </h1>
                <p className="gettingStarted-section-body-content-description-paragraph">
                  We conduct a Momentum Health Check. We learn where your
                  business is now and address where you want to be in the
                  future.
                </p>
              </div>
            </div>
            <div className=" gettingStarted-section-body-content">
              <div className=" gettingStarted-section-body-content-image">
                <img
                  className="gettingStarted-section-body-content-image-shadow"
                  src={FollowAction}
                />
              </div>
              <div className=" gettingStarted-section-body-content-description">
                <h1 className="gettingStarted-section-body-content-description-title">
                  3. Follow through with action
                </h1>
                <p className="gettingStarted-section-body-content-description-paragraph">
                  We’ve got you! Let's turn strategy into action. Based on the
                  plan, we take steps to move your business towards the goals we
                  set together and address the concerns you expressed.
                </p>
              </div>
            </div>
          </div>
          <button
            className="gettingStarted-section-btn"
            onClick={clickContactUs}
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedComponent;
