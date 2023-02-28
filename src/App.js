import React, { useRef } from "react";
import "./styles/app.scss";

import HomeComponent from "./component/homeComponent";
import QualityComponent from "./component/qualityComponent";
import TextSwiperComponent from "./component/textSwiperComponent";
import ControllFinanceComponent from "./component/controllFinanceComponent";
import SolutionInvestmentComponent from "./component/solution&InvestmentComponent";
import GettingStartedComponent from "./component/gettingStartedComponet";
import LogoSwiperComponent from "./component/logoSwiperComponent";
import CFOTeamComponent from "./component/CFOTeamComponent";
import DownloadComponent from "./component/downloadComponent";
import FooterComponent from "./component/footerComponent";
import ContactUsComponent from "./component/contactUsComponent";
import SubscribeComponent from "./component/subscribeComponent";
import ClientsLogoSwiperComponent from "./component/clientsLogoSwiperComponent";

function App() {
  const home = useRef(null);
  const goHomePage = () => {
    console.log(home.current.scrollTo());
    if (home && home.current) {
      home.current.scrollIntoView();
    }
  };
  const aboutUs = useRef(null);
  const homeOnLearnAboutUs = () => {
    console.log(aboutUs.current.scrollTo());
    if (aboutUs && aboutUs.current) {
      aboutUs.current.scrollIntoView();
    }
  };
  const contactUs = useRef(null);
  const clickContactUs = () => {
    console.log(contactUs.current.scrollTo());
    if (contactUs && contactUs.current) {
      contactUs.current.scrollIntoView();
    }
  };
  return (
    <div className="App">
      <HomeComponent
        homeOnLearnAboutUs={homeOnLearnAboutUs}
        homePage={home}
        clickContactUs={clickContactUs}
      />
      <QualityComponent />
      <TextSwiperComponent />
      <ClientsLogoSwiperComponent />
      <ControllFinanceComponent clickContactUs={clickContactUs} />
      <SolutionInvestmentComponent clickContactUs={clickContactUs} />
      <GettingStartedComponent clickContactUs={clickContactUs} />
      <LogoSwiperComponent />
      <CFOTeamComponent aboutUs={aboutUs} clickContactUs={clickContactUs} />
      <DownloadComponent />
      <FooterComponent
        homeOnLearnAboutUs={homeOnLearnAboutUs}
        goHomePage={goHomePage}
        clickContactUs={clickContactUs}
      />
      <ContactUsComponent contactUs={contactUs} />
      <SubscribeComponent />
    </div>
  );
}

export default App;
