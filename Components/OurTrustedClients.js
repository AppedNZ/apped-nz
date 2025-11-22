import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Brief from "./Brief";
import Heading from "./Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import Swiper core and required modules
const OTC = "OurTrustedClients";
const clients = [
  { src: "/assets/clients/1.png", alt: "Hello Sushi" },
  { src: "/assets/clients/2.png", alt: "Ourfffarm" },
  { src: "/assets/clients/3.png", alt: "Prawn Park" },
  { src: "/assets/clients/4.png", alt: "MainStream" },
  { src: "/assets/clients/5.png", alt: "NZ Hops" },
  { src: "/assets/clients/6.png", alt: "Clim Systems" },
  { src: "/assets/clients/7.png", alt: "Giltrap Ag" },
  { src: "/assets/clients/8.png", alt: "Huntmate" },
  { src: "/assets/clients/9.png", alt: "Virotech" },
  { src: "/assets/clients/10.png", alt: "Wilson Contractors" },
];
export default function OurTrustedClients() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [sliderProps, setSlideProps] = useState({ slidesPerView: 1, rows: 1 });
  useEffect(() => {
    window &&
      window.innerWidth >= 450 &&
      setSlideProps({
        slidesPerView: 3,
        rows: 1,
      });
    window &&
      window.innerWidth >= 768 &&
      setSlideProps({
        slidesPerView: 5,
        rows: 1,
      });
  }, []);
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = { show: { x: 0, opacity: 1 }, hidden: { x: -100, opacity: 0 } };
  return (
    <div className="my-container relative">
      <div className={OTC}>
        <Heading>
          <span className="text-blue">Trusted </span> by Clients
        </Heading>
        <div ref={ref} className="w-full lg:w-2/3 mx-auto">
          <Brief
            text={`Numerous clients have placed their trust in our app development expertise, and we're proud to have developed apps for some large New Zealand brands.`}
          />
        </div>
        <div className="w-full relative flex">
          <img
            id={`slider_next3`}
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
            src="/assets/next-button.svg"
            alt="next slide"
          />
          <img
            id={`slider_prev3`}
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 rotate-180"
            src="/assets/next-button.svg"
            alt="prev slide"
          />

          <Swiper
            navigation={{
              nextEl: `#slider_next3`,
              prevEl: `#slider_prev3`,
            }}
            autoplay={{ delay: 2500, pauseOnMouseEnter: false }}
            grabCursor={true}
            initialSlide={3}
            centeredSlides={true}
            slidesPerView={sliderProps.slidesPerView}
            speed={300}
            loop={true}
            spaceBetween={0}
            className="mySwiper flex">
            {clients.map((client) => (
              <SwiperSlide key={client.alt} className="flex h-auto justify-center items-center">
                <motion.img
                  animate={inView ? "show" : "hidden"}
                  variants={item}
                  src={client.src}
                  alt={client.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <motion.div
          variants={container}
          initial="hidden"
          className={`${OTC}__clients-grid`}></motion.div> */}
      </div>
    </div>
  );
}
