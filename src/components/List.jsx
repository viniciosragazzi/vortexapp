import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

//context

export function List({ type,acao, animacao }) {
  
  const typeName = location.pathname.split("/");
  let str = typeName[2] ? typeName[2].split("") : typeName[1].split("");

  return (
    <div className="flex flex-col gap-14">
      <div className="listSlide h-52 mt-10">
        <h1 className="text-white text-xl font-semibold mb-4">Lançamentos</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
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
      <div className="listSlide h-52 mt-10">
        <h1 className="text-white text-xl font-semibold mb-4">
          {!type ? 'Series de' : ''} Ação e Aventura
        </h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {acao?.map((item) => (
            <SwiperSlide key={item.id} className="overflow-hidden">
              <div className="content z-50">{item.name}</div>
              <img
                className=" w-full absolute opacity-40  "
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="listSlide h-52 mt-10">
        <h1 className="text-white text-xl font-semibold mb-4">  {!type ? 'Filmes de' : ''} Animação</h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {animacao?.map((item) => (
            <SwiperSlide key={item.id} className="overflow-hidden">
              <div className="content z-50">{item.title}</div>
              <img
                className=" w-full absolute opacity-40  "
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
