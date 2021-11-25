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
const slides = [
  {
    screens: [
      "/assets/comments/showday1.png",
      "/assets/comments/showday2.png",
      "/assets/comments/showday3.png",
    ],
    name: "Show Day",
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    author: `Sheldon Kirk`,
  },
  {
    screens: [
      "/assets/comments/victor1.png",
      "/assets/comments/victor2.png",
      "/assets/comments/victor3.png",
    ],
    name: "Victor",
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    author: `Sheldon Kirk`,
  },
  {
    screens: [
      "/assets/comments/nutrition1.png",
      "/assets/comments/nutrition2.png",
      "/assets/comments/nutrition3.png",
    ],
    name: "Champion nutrition",
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    author: `Sheldon Kirk`,
  },
  {
    screens: [
      "/assets/comments/zespri1.png",
      "/assets/comments/zespri2.png",
      "/assets/comments/zespri3.png",
    ],
    name: "Zespri",
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    author: `Sheldon Kirk`,
  },
  {
    screens: [
      "/assets/comments/tulloch1.png",
      "/assets/comments/tulloch2.png",
      "/assets/comments/tulloch3.png",
    ],
    name: "Tulloch",
    comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    author: `Sheldon Kirk`,
  },
];
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
        autoplay={{ delay: 4500, pauseOnMouseEnter: false }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        speed={300}
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="clients-slide">
              <div className="slide-screens">
                <img className="screen1" src={s.screens[0]} alt={s.name + " app"} />
                <img className="screen2" src={s.screens[1]} alt={s.name + " app"} />
                <img className="screen3" src={s.screens[2]} alt={s.name + " app"} />
              </div>
              <div className="slide-comment">
                <div className="about">
                  <div className="app-name">{s.name}</div>
                  <div className="client-bio flex items-center gap-2.5">
                    <img
                      className="client-avatar"
                      src="/assets/comments/showday-avatar.png"
                      alt="client avatar"
                    />
                    <div>
                      <p className="client-name text-white">{s.author}</p>
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
                <Brief text={s.comment} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
