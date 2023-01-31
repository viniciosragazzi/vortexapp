import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/global.css";
// import "swiper/css/effect-coverflow";
// import required modules
// import { EffectCoverflow } from "swiper";
import { Pagination } from "swiper";
export function Home() {
  return (
    <div className="w-100% md:w-[calc(100%)] h-screen md:p-8 py-6 px-4">
      <div className="header my-4">
        <h1 className="text-white font-bold text-xl md:text-3xl">
          <span className="text-primary">Filmes</span> e Séries
        </h1>
      </div>
      <div className="slider h-60 md:h-80 -z-10 mt-16">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container  w-full h-full flex justify-between">
              <div className="filter w-full h-full absolute top-0 left-0 bg-dark opacity-70 z-0"></div>
              <div className="text flex flex-col gap-2  text-white p-4 max-w-xl z-50">
                <h3 className="font-semibold text-sm md:text-xl  text-white-blue">
                  Último Lançamento
                </h3>
                <h1 className=" font-bold text-xl md:text-4xl">
                  {" "}
                  Home Aranha no Aranhaverso
                </h1>
                <p className="text-primary flex gap-2 text-xs md:text-sm mt-2 font-semibold">
                  <span className="idade">+12</span>•
                  <span className="ano">2023</span>•
                  <span className="type">Ação</span>•
                  <span className="tempo">2h50min</span>
                </p>

                <p className="sinopse text-sm md:text-base hidden md:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat commodi molestiae suscipit deserunt doloremque
                  consectetur quas sequi modi deleniti nulla reiciendis ut
                  veniam eaque dolores voluptatum id, enim voluptate fugiat!
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="trailer w-full max-w-[220px] h-10 flex items-center justify-center text-sm font-semibold bg-primary rounded-md">
                    Assistir Trailer
                  </button>
                  <button className="more w-full max-w-[220px] h-10 flex items-center justify-center text-sm font-semibold bg-dark-2 rounded-md">
                    Saber Mais
                  </button>
                </div>
              </div>
              <div className="img flex-1 h-full max-w-3xl "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container  w-full h-full flex justify-between">
              <div className="filter w-full h-full absolute top-0 left-0 bg-dark opacity-70 z-0"></div>
              <div className="text flex flex-col gap-2  text-white p-4 max-w-xl z-50">
                <h3 className="font-semibold text-sm md:text-xl  text-white-blue">
                  Último Lançamento
                </h3>
                <h1 className=" font-bold text-xl md:text-4xl">
                  {" "}
                  Home Aranha no Aranhaverso
                </h1>
                <p className="text-primary flex gap-2 text-xs md:text-sm mt-2 font-semibold">
                  <span className="idade">+12</span>•
                  <span className="ano">2023</span>•
                  <span className="type">Ação</span>•
                  <span className="tempo">2h50min</span>
                </p>

                <p className="sinopse text-sm md:text-base hidden md:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat commodi molestiae suscipit deserunt doloremque
                  consectetur quas sequi modi deleniti nulla reiciendis ut
                  veniam eaque dolores voluptatum id, enim voluptate fugiat!
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="trailer w-full max-w-[220px] h-10 flex items-center justify-center text-sm font-semibold bg-primary rounded-md">
                    Assistir Trailer
                  </button>
                  <button className="more w-full max-w-[220px] h-10 flex items-center justify-center text-sm font-semibold bg-dark-2 rounded-md">
                    Saber Mais
                  </button>
                </div>
              </div>
              <div className="img flex-1 h-full max-w-3xl "></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container  w-full h-full flex justify-between">
              <div className="filter w-full h-full absolute top-0 left-0 bg-dark opacity-70 z-0"></div>
              <div className="text flex flex-col gap-2  text-white p-4 max-w-xl z-50">
                <h3 className="font-semibold text-sm md:text-xl  text-white-blue">
                  Último Lançamento
                </h3>
                <h1 className=" font-bold text-xl md:text-4xl">
                  {" "}
                  Home Aranha no Aranhaverso
                </h1>
                <p className="text-primary flex gap-2 text-xs md:text-sm mt-2 font-semibold">
                  <span className="idade">+12</span>•
                  <span className="ano">2023</span>•
                  <span className="type">Ação</span>•
                  <span className="tempo">2h50min</span>
                </p>

                <p className="sinopse text-sm md:text-base hidden md:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat commodi molestiae suscipit deserunt doloremque
                  consectetur quas sequi modi deleniti nulla reiciendis ut
                  veniam eaque dolores voluptatum id, enim voluptate fugiat!
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="trailer w-full max-w-[220px] h-10 flex items-center justify-center text-sm font-semibold bg-primary rounded-md">
                    Assistir Trailer
                  </button>
                  <button className="more w-full max-w-[220px] h-10 flex items-center justify-center text-sm font-semibold bg-dark-2 rounded-md">
                    Saber Mais
                  </button>
                </div>
              </div>
              <div className="img flex-1 h-full max-w-3xl "></div>
            </div>
          </SwiperSlide>
        </Swiper>
        /*
      </div>
    </div>
  );
}
