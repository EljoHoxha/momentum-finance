import React from "react";
import PreSpeed from "../images/Pre-Speed.png";
import SeriaA from "../images/SeriaA.png";
import SeriaB from "../images/SeriaB.png";

const ControllFinanceComponent = ({ clickContactUs }) => {
  return (
    <div className="controllFinance">
      <div className="controllFinance-head">
        <h1 className="controllFinance-head-title">
          Take control of all your business finances
        </h1>
        <p className="controllFinance-head-subTitle">
          Experienced growth advice from paper napkin to Series B Custom
          solutions for all stages of growth
        </p>
      </div>
      <div className="controllFinance-body">
        <div className="controllFinance-body-item">
          <h1 className="controllFinance-body-item-title">Pre-Seed / Seed</h1>
          <img src={PreSpeed} className="controllFinance-body-item-img" />
          <p className="controllFinance-body-item-description">
            We’ll take care of the day-to-day bookkeeping so that you can focus
            on your business. We provide clear, accurate, and reliable financial
            data without the headache.
          </p>
        </div>
        <div className="controllFinance-body-item">
          <h1 className="controllFinance-body-item-title">Series A</h1>
          <img src={SeriaA} className="controllFinance-body-item-img" />
          <p className="controllFinance-body-item-description">
            No more guessing, no more crossing your fingers or denying reality.
            You’ll know the facts. We’ll equip you with the reporting you
            require to make wise and confident decisions.
          </p>
        </div>
        <div className="controllFinance-body-item">
          <h1 className="controllFinance-body-item-title">Series B</h1>
          <img src={SeriaB} className="controllFinance-body-item-img" />
          <p className="controllFinance-body-item-description">
            The CFO Team for Founders. As your trusted advisor, we clean up the
            books, handle the accounting / Back office, and assist with due
            diligence, raising capital, while providing expert advice.
          </p>
        </div>
      </div>
      <button className="controllFinance-btn" onClick={clickContactUs}>
        Schedule a Call
      </button>
    </div>
  );
};

export default ControllFinanceComponent;
