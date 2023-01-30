import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/global.css";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow } from "swiper";

export function Home() {
  return (
    <div className="w-100% md:w-[calc(100%)] h-screen md:p-8 py-6 px-4">
      <div className="header my-4">
        <h1 className="text-white font-bold text-xl md:text-3xl">
          <span className="text-primary">Filmes</span> e Séries
        </h1>
      </div>
      <div className="slider h-52 md:h-80 -z-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            1020: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            depth: 20,
            stretch: 50,
            scale: 0.9,
            modifier: 1,
            slideShadows: true,
          }}
          effect="coverflow"
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
