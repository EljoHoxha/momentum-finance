import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import EnjoyWorkLogo from "../logo/clientsLogo/EnjoyWorkLogo.png";
import HLogo from "../logo/clientsLogo/H-Logo.png";
import NeotographyLogo from "../logo/clientsLogo/NetographyLogo.png";
import OutBoundWorkLogo from "../logo/clientsLogo/OutBoundWorkLogo.png";
import RealScoutLogo from "../logo/clientsLogo/RealScoutLogo.png";
import RedLockLogo from "../logo/clientsLogo/RedLockLogo.png";

const ClientsLogoSwiperComponent = () => {
  return (
    <div className="clientsLogoSwiper">
      <div className="full-container">
        <div className="logoSwiper-section-swiper">
          <Swiper
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="clientsLogoSwiper-section-swiper"
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            slidesPerView={2}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 4,
              },
              1050: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={NeotographyLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={EnjoyWorkLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={RealScoutLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={OutBoundWorkLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={HLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={RedLockLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={NeotographyLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={EnjoyWorkLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={RealScoutLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={OutBoundWorkLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={HLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="clientsLogoSwiper-section-swiper-wrapper">
                <img
                  alt=""
                  src={RedLockLogo}
                  className="clientsLogoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogoSwiperComponent;
