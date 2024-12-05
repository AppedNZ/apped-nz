import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import Swiper core and required modules
import React from "react";
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";

SwiperCore.use([Grid, Pagination, Navigation]);
const tiles = [
  "/assets/tiles/1.jpeg",
  "/assets/tiles/2.jpeg",
  "/assets/tiles/3.jpeg",
  "/assets/tiles/4.jpeg",
  "/assets/tiles/5.jpeg",
  "/assets/tiles/6.jpeg",
  "/assets/tiles/7.jpeg",
  "/assets/tiles/8.jpeg",
  "/assets/tiles/9.jpeg",
  "/assets/tiles/10.jpeg",
  "/assets/tiles/11.jpeg",
  "/assets/tiles/12.jpeg",
  "/assets/tiles/13.jpeg",
  "/assets/tiles/14.jpeg",
  "/assets/tiles/15.jpeg",
  "/assets/tiles/16.jpeg",
  "/assets/tiles/17.jpeg",
  "/assets/tiles/18.jpeg",
  "/assets/tiles/19.jpeg",
  "/assets/tiles/20.jpeg",
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
        }}>
        {tiles.map((tile, i) => (
          <SwiperSlide key={i}>
            <div className="p-2.5">
              <div className="Tiles__wrap ">
                <img className="Tiles__tile" src={tile} alt="App example" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination flex"></div>
      </Swiper>{" "}
    </div>
  );
}
