import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Brief from "./Brief";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function ClientSlider({ idx = 2 }) {
  return (
    <div className="Slider relative">
      <img
        id={`slider_next2`}
        className="Slider__next Slider__button"
        src="/assets/next-button.svg"
        alt="next slide"
      />
      <img
        id={`slider_prev2`}
        className="Slider__prev Slider__button"
        src="/assets/next-button.svg"
        alt="prev slide"
      />

      <Swiper
        navigation={{
          nextEl: `#slider_next2`,
          prevEl: `#slider_prev2`,
        }}
        // autoplay={{ delay: 2500 }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        speed={300}
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="clients-slide">
            <div className="slide-screens">
              <img
                className="screen1"
                src="/assets/comments/showday1.png"
                alt="showday app"
              />
              <img
                className="screen2"
                src="/assets/comments/showday2.png"
                alt="showday app"
              />
              <img
                className="screen3"
                src="/assets/comments/showday3.png"
                alt="showday app"
              />
            </div>
            <div className="slide-comment">
              <div className="about">
                <div className="app-name">Show day</div>
                <div className="client-bio flex items-center gap-2.5">
                  <img
                    className="client-avatar"
                    src="/assets/comments/showday-avatar.png"
                    alt="client avatar"
                  />
                  <div>
                    <p className="client-name text-white">Sergey Golodyaev</p>
                    <div className="client-rating flex gap-px">
                      <img className="star" src="/assets/star.svg" alt="rating-star" />
                      <img className="star" src="/assets/star.svg" alt="rating-star" />
                      <img className="star" src="/assets/star.svg" alt="rating-star" />
                      <img className="star" src="/assets/star.svg" alt="rating-star" />
                      <img className="star" src="/assets/star.svg" alt="rating-star" />
                    </div>
                  </div>
                </div>
              </div>
              <Brief
                text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
