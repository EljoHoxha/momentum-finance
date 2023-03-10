import React from "react";
import Frustrated from "../images/Frustrated-Quality.png";
const QualityComponent = () => {
  return (
    <div className="quality">
      <div className="quality-head">
        <div className="full-container">
          <div className="quality-head-content">
            <p className="quality-head-content-item">Accuracy</p>
            <p className="quality-head-content-item">Clarlty</p>
            <p className="quality-head-content-item">Confldence</p>
          </div>
        </div>
      </div>
      <div className="quality-frustrated">
        <div className="quality-frustrated-content quality-frustrated-content-img">
          <img
            className="quality-frustrated-content-img-frustrated"
            src={Frustrated}
          />
        </div>
        <div className="quality-frustrated-content quality-frustrated-content-questions">
          <h1 className="quality-frustrated-content-title">
            Are you frustrated by:
          </h1>
          <ul className="quality-frustrated-content-list">
            <li className="quality-frustrated-content-list-item">
              <span className="quality-frustrated-content-list-item-circle" />
              <p>Struggling to keep investors confident with your reporting?</p>
            </li>
            <li className="quality-frustrated-content-list-item">
              {/* <span className="quality-frustrated-content-list-item-circle" /> */}
              Confusing reports that do not reveal the KPIs that matter?
            </li>
            <li className="quality-frustrated-content-list-item">
              <span className="quality-frustrated-content-list-item-circle" />
              <p>Financials that don’t match the narrative of the business?</p>
            </li>
            <li className="quality-frustrated-content-list-item">
              <span className="quality-frustrated-content-list-item-circle" />
              <p>Lacking the time to properly handle the books?</p>
            </li>
            <li className="quality-frustrated-content-list-item">
              <span className="quality-frustrated-content-list-item-circle" />
              <p> Processing Accounts Payable / AR?</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QualityComponent;
