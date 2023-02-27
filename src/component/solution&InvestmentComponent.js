import React from "react";

const SolutionInvestmentComponent = ({ clickContactUs }) => {
  return (
    <div className="SolutionInvestment">
      <div className="SolutionInvestment-head">
        <h1 className="SolutionInvestment-head-title">
          Solutions & Investment
        </h1>
        <p className="SolutionInvestment-head-subTitle">
          Suggested Momentum CFO Team Packages based on stage
        </p>
      </div>
      <div className="SolutionInvestment-body">
        <div className="SolutionInvestment-body-item">
          <h1 className="SolutionInvestment-body-item-title">
            Pre-Seed / Seed
          </h1>
          <p className="SolutionInvestment-body-item-subTitle">
            Starting at $1,500/mo
          </p>

          <ul className="SolutionInvestment-body-item-description">
            <li className="SolutionInvestment-body-item-description-text">
              Day-to-day Ap and Ar
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Payroll Processing
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Buget vs Actual
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Reporting Quarterly
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Startegy Sessions
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Advise / Support during <br /> negotiations w / Angels / VC's
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Due Diligence Prep / Support
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Regulatory / Compliance Filings
            </li>
          </ul>
        </div>
        <div className="SolutionInvestment-body-item">
          <h1 className="SolutionInvestment-body-item-title">Series A</h1>
          <p className="SolutionInvestment-body-item-subTitle">
            Starting at $1,500/mo
          </p>

          <ul className="SolutionInvestment-body-item-description">
            <li className="SolutionInvestment-body-item-description-text">
              Everything in Seed & A plus:
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Serial A Financial Modeling
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Monthly Startegy Sessions
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Insurance Review
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Monthly Workbook w/ KPI's
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Sales Tax Filings
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Investor / Board Reporting
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              E-commerce integration
            </li>
          </ul>
        </div>
        <div className="SolutionInvestment-body-item">
          <h1 className="SolutionInvestment-body-item-title">Series B</h1>
          <p className="SolutionInvestment-body-item-subTitle">
            Starting at $6,000/mo
          </p>
          <ul className="SolutionInvestment-body-item-description">
            <li className="SolutionInvestment-body-item-description-text">
              Everything in Seed & A plus:
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Frequent Strategy sessions
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Serial B Financial Modeling
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Financial Planing / Analysis
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Financial Graph Dashboard
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Custom Reprting / KPIs
            </li>
            <li className="SolutionInvestment-body-item-description-text">
              Audit Preparation & Support
            </li>
          </ul>
        </div>
      </div>

      <div className="SolutionInvestment-btn">
        <button
          className="SolutionInvestment-btn-getStarted"
          onClick={clickContactUs}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SolutionInvestmentComponent;
