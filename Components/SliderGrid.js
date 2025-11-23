import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";

SwiperCore.use([Grid, Pagination, Navigation]);
const tiles = [
  { src: "/assets/tiles/1.jpg", alt: "INTA-WOOD FORESTRY" },
  { src: "/assets/tiles/2.jpg", alt: "LOX N GO" },
  { src: "/assets/tiles/3.jpg", alt: "KTA" },
  { src: "/assets/tiles/4.jpg", alt: "OMEGA WINDOWS" },
  { src: "/assets/tiles/5.jpg", alt: "AD LIBRARY" },
  { src: "/assets/tiles/6.jpg", alt: "COBBLE KINGS" },
  { src: "/assets/tiles/7.jpg", alt: "HUNT MATE" },
  { src: "/assets/tiles/8.jpg", alt: "HUSTLER EQUIPMENT" },
  { src: "/assets/tiles/9.jpg", alt: "VIROTECH" },
  { src: "/assets/tiles/10.jpg", alt: "Cooper Young" },
  { src: "/assets/tiles/11.jpg", alt: "SWIM LEGION" },
  { src: "/assets/tiles/12.jpg", alt: "GILTRAP AGRIZONE" },
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
        slidesPerView: 4,
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
              <div className="Tiles__wrap relative group">
                <div className="Tiles__backdrop absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black bg-opacity-60 z-10 flex justify-center items-center">
                  <span className="font-bold  text-lg text-white text-center">{tile.alt}</span>
                </div>
                <img className="Tiles__tile" src={tile.src} alt={tile.src} />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination flex"></div>
      </Swiper>{" "}
    </div>
  );
}
