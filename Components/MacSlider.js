// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);
const slides = [
  "/assets/mac-screens/1.jpg",
  "/assets/mac-screens/2.jpg",
  "/assets/mac-screens/3.jpg",
  "/assets/mac-screens/4.jpg",
  "/assets/mac-screens/5.jpg",
  "/assets/mac-screens/6.jpg",
  "/assets/mac-screens/7.jpg",
  "/assets/mac-screens/8.jpg",
];
export default function MacSlider({ idx = 2 }) {
  return (
    <div className=" absolute MacSlider">
      <Swiper
        autoplay={{ delay: 1500 }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        speed={300}
        loop={true}
        className="mySwiper">
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <img className="z-0" src={s} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
