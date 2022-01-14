import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";

SwiperCore.use([Grid, Pagination, Navigation]);
import React from "react";
const tiles = [
  "/assets/tiles/1.jpg",
  "/assets/tiles/2.jpg",
  "/assets/tiles/3.jpg",
  "/assets/tiles/4.jpg",
  "/assets/tiles/5.jpg",
  "/assets/tiles/6.jpg",
  "/assets/tiles/7.jpg",
  "/assets/tiles/8.jpg",
  "/assets/tiles/9.jpg",
  "/assets/tiles/10.jpg",
  "/assets/tiles/11.jpg",
  "/assets/tiles/12.jpg",
  "/assets/tiles/13.jpg",
  "/assets/tiles/14.jpg",
  "/assets/tiles/15.jpg",
  "/assets/tiles/16.jpg",
  "/assets/tiles/17.jpg",
  "/assets/tiles/18.jpg",
  "/assets/tiles/19.jpg",
  "/assets/tiles/20.jpg",
];
export default function SliderGrid() {
  const [sliderProps, setSlideProps] = useState({ slidesPerView: 2, rows: 3 });
  useEffect(() => {
    window &&
      window.innerWidth >= 450 &&
      setSlideProps({
        slidesPerView: 3,
        rows: 3,
      });
    window &&
      window.innerWidth >= 768 &&
      setSlideProps({
        slidesPerView: 4,
        rows: 4,
      });
    window &&
      window.innerWidth >= 1280 &&
      setSlideProps({
        slidesPerView: 5,
        rows: 4,
      });
  }, []);
  return (
    <div className="relative w-full py-10 z-10">
      {sliderProps.slidesPerView * sliderProps.rows < tiles.length && (
        <>
          {" "}
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
        </>
      )}
      <Swiper
        className=""
        slidesPerView={sliderProps.slidesPerView}
        grid={{
          rows: sliderProps.rows,
          fill: "row",
        }}
        spaceBetween={0}
        // pagination
        // pagination={pagination}
        // loop={true}
        navigation={{
          nextEl: "#slider_next2",
          prevEl: "#slider_prev2",
        }}
      >
        {tiles.map((tile, i) => (
          <SwiperSlide key={i}>
            <div className="p-2.5">
              <div className="Tiles__wrap ">
                <img className="Tiles__tile" src={tile} alt="App example" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div class="swiper-pagination flex"></div>
      </Swiper>{" "}
    </div>
  );
}
