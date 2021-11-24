import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);
const slides = [
  "/assets/apps/airport.png",
  "/assets/apps/bookitin247.png",
  "/assets/apps/eggs.png",
  "/assets/apps/food_truck.png",
  "/assets/apps/harwood.png",
  "/assets/apps/loyalty.png",
  "/assets/apps/map.png",
  "/assets/apps/olympus.png",
  "/assets/apps/openHomes.png",
];
export default function Slider({ idx = 1 }) {
  const [sliderProps, setSlideProps] = useState(null);
  useEffect(() => {
    window && window.innerWidth < 768
      ? setSlideProps({
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          },
        })
      : setSlideProps({
          slidesPerView: 5,
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 100,
            modifier: 1,
          },
        });
  }, []);
  return (
    <div className="Slider relative">
      <img
        id={`slider_next${idx}`}
        className="Slider__next Slider__button"
        src="/assets/next-button.svg"
        alt="next slide"
      />
      <img
        id={`slider_prev${idx}`}
        className="Slider__prev Slider__button"
        src="/assets/next-button.svg"
        alt="prev slide"
      />
      {sliderProps && (
        <Swiper
          navigation={{
            nextEl: `#slider_next${idx}`,
            prevEl: `#slider_prev${idx}`,
          }}
          autoplay={{ delay: 2500 }}
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          {...sliderProps}
          speed={300}
          loop={true}
          pagination={true}
          className="mySwiper"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="slide">
                <img src={s} alt="app example" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
