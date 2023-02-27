import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Autoplay]);
const TextSwiperComponent = () => {
  return (
    <div className="textSwiper">
      <div className="full-container">
        <div className="textSwiper-section">
          <div className="textSwiper-section-head">
            <h1 className="textSwiper-section-head-title">We get it.</h1>
            <h1 className="textSwiper-section-head-subTitle">
              Most founders are not finance experts.
            </h1>
            <p className="textSwiper-section-head-text">
              As Founder-centric advisors, we see it all the time. With over 80
              years of combined experience in startup accounting and finance,
              Momentum Finance’s Team has advised and managed the finances for
              over 120 businesses and assisted in raising over $300MM in
              capital.
            </p>
          </div>
          <div className="textSwiper-section-swiper">
            <Swiper
              navigation={false}
              modules={[Navigation]}
              className="mySwiper"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop
              slidesPerView={1}
            >
              <SwiperSlide className="textSwiper-section-swiper-wrapper">
                <div>
                  <p className="textSwiper-section-swiper-wrapper-description">
                    “Working with Tim, Helga and the Momentum team helps me
                    focus on building my core business, while having the peace
                    of mind that finances are being well taken care of. The team
                    not only stays on top of everything tactically, but Tim is
                    always planning ahead to help us scale.”
                  </p>
                  <p className="textSwiper-section-swiper-wrapper-name">
                    Varun B, Founder/CEO, RedLock
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="textSwiper-section-swiper-wrapper">
                <div>
                  <p className="textSwiper-section-swiper-wrapper-description">
                    "Momentum's reliable and flexible service allows us to
                    operate at a higher level than a typical company our size. A
                    partnership with Momentum is a force-multiplier every CEO
                    needs to consider."
                  </p>
                  <p className="textSwiper-section-swiper-wrapper-name">
                    Arthur K, CEO, RealScout
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="textSwiper-section-swiper-wrapper">
                <div>
                  <p className="textSwiper-section-swiper-wrapper-description">
                    “Experience and execution are just two of the many
                    attributes and skills that Tim and his team bring to a
                    Client. From onboarding to implementation, my experience
                    with Momentum Finance was first-rate and professional."
                  </p>
                  <p className="textSwiper-section-swiper-wrapper-name">
                    {" "}
                    Doug S, COO, CrowdFunder
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="textSwiper-section-swiper-wrapper">
                <div>
                  <p className="textSwiper-section-swiper-wrapper-description">
                    "Netography used Momentum Finance, a boutique fractional CFO
                    firm, after we raised our Seed. We survived the pandemic,
                    raised a $45M Series A, and did a solid job navigating
                    venture debt. Critical items to me were: Books to be
                    immaculate, the finance portion of Due Diligence wouldn't be
                    complex, models were workable, and we had decent management
                    of the cap table. There is a point where the cost of a firm
                    versus taking finance in-house makes sense, and that's up to
                    each business operator where that line is and how much of
                    the CFO you demand."
                  </p>
                  <p className="textSwiper-section-swiper-wrapper-name">
                    Barrett L, Founder / CEO, Netography
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSwiperComponent;
