import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BillLogo from "../logo/bill-logo.png";
import ELogo from "../logo/E-logo.png";
import GustoLogo from "../logo/gusto-logo.png";
import QuickBooksLogo from "../logo/quick-books-logo.png";
import SlackLogo from "../logo/slack-logo.png";

const LogoSwiperComponent = () => {
  return (
    <div className="logoSwiper">
      <div className="full-container">
        <div className="logoSwiper-section-swiper">
          <Swiper
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="logoSwiper-section-swiper"
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
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={BillLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={ELogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={GustoLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={QuickBooksLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={SlackLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={BillLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={ELogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={GustoLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={QuickBooksLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="logoSwiper-section-swiper-wrapper">
                <img
                  src={SlackLogo}
                  className="logoSwiper-section-swiper-wrapper-icon"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LogoSwiperComponent;
