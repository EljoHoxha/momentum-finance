import React from "react";
import Navbar from "./navbar";

const HomeComponent = ({ homeOnLearnAboutUs, homePage }) => {
  return (
    <div className="home">
      <Navbar learnAboutUs={homeOnLearnAboutUs} comeHomePage={homePage} />
      <div className="full-container">
        <div className="home-section">
          <div className="home-section-container">
            <h1 className="home-section-container-title">
              YOUR BIG IDEA DIDN’T COME WITH A CFO.
            </h1>
            <p className="home-section-container-text">
              DON’T WORRY, WE’VE GOT YOU.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
