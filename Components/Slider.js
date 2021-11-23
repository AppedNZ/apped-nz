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
          onSlideChange={() => {
            const slides = document.querySelectorAll(".swiper-slide");
            console.dir(slides);
          }}
          navigation={{
            nextEl: `#slider_next${idx}`,
            prevEl: `#slider_prev${idx}`,
          }}
          autoplay={{ delay: 2500 }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          {...sliderProps}
          speed={300}
          loop={true}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="slide">
              <img src="/assets/phone_app.png" alt="app example" />
            </div>
          </SwiperSlide>{" "}
        </Swiper>
      )}
    </div>
  );
}
