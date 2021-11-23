import { useState, useEffect } from "react";
import Head from "next/head";
import EasyToUseSection from "../Components/EasyToUseSection";
import ExamplesSection from "../Components/ExamplesSection";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import OurTrustedClients from "../Components/OurTrustedClients";
import Services from "../Components/Services";
import WhatClientsSay from "../Components/WhatClientsSay";
import PhonesGrid from "../Components/PhonesGrid";
// import "../styles/Header.css";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };

  useEffect(() => {
    window && window.addEventListener("scroll", handleScroll);

    return () => {
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Apped NZ</title>
        <meta name="description" content="App Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header scrolled={scrolled} />
      <div className="relative pt-[100px] overflow-hidden">
        {/* <PhonesGrid /> */}
        <img
          className="top-0 left-0 absolute w-full h-full object-cover z-0 pointer-events-none"
          src="/assets/waves-pattern.png"
          alt="pattern"
        />
        <HeroSection />
        <Services />
      </div>
      <ExamplesSection />
      <EasyToUseSection />
      <OurTrustedClients />
      <WhatClientsSay />
      <div className="relative">
        <img
          className="top-0 left-0 absolute w-full h-full object-cover z-0 pointer-events-none transform rotate-180"
          src="/assets/waves-pattern.png"
          alt="pattern"
        />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
