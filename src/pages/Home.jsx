import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/global.css";
import "swiper/css/effect-fade";
// import required modules
// import { EffectCoverflow } from "swiper";
import { Pagination, EffectFade } from "swiper";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export function Home() {
  const percentage = 50;
  return (
    <div className="w-100% md:w-[calc(100%)] h-screen md:p-8 py-6 px-4">
      <div className="header my-4">
        <h1 className="text-white font-bold text-xl md:text-3xl">
          <span className="text-primary">Filmes</span> e Séries
        </h1>
      </div>
      <div className="slider h-60 md:h-96 -z-10 mt-6">
        <Swiper
          direction={"vertical"}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="content  w-full h-full flex justify-between"
              style={{
                backgroundImage:
                  "url(" +
                  "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/x2IqsMlpbOhS8zIUJfyl1yO4gHF.jpg" +
                  ")",
              }}
            >
              <div className="filter w-full h-full absolute top-0 left-0 bg-dark opacity-70 z-0"></div>
              <div className="text flex flex-col md:gap-2   text-white p-4 max-w-xl z-50">
                <h3 className="font-semibold text-sm md:text-xl  text-white-blue">
                  Último Lançamento
                </h3>
                <h1 className=" font-bold text-xl md:text-4xl">
                  {" "}
                  Homem Aranha no Aranhaverso
                </h1>
                <p className="text-primary flex gap-2 text-xs md:text-sm mt-2 font-semibold  items-center">
                  <span className="idade">+12</span>•
                  <span className="ano">2023</span>•
                  <span className="type">Ação</span>•
                  <span className="tempo">2h50min</span>•
                  <div className="w-8 h-8 flex justify-center items-center">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `#5078ff`,
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Customize transition animation
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          // Rotate the path
                          transform: "rotate(0.25turn)",
                          transformOrigin: "center center",
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: "#d6d6d6",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Rotate the trail
                          transform: "rotate(0.25turn)",
                          transformOrigin: "center center",
                        },
                        // Customize the text
                        text: {
                          // Text color
                          fill: "#fff",
                          // Text size
                          fontSize: "28px",
                        },
                        // Customize background - only used when the `background` prop is true
                      }}
                    />
                  </div>
                </p>

                <p className="sinopse text-sm md:text-base flex max-h-10 overflow-hidden md:max-h-[100%] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat commodi molestiae suscipit deserunt doloremque
                  consectetur quas sequi modi deleniti nulla reiciendis ut
                  veniam eaque dolores voluptatum id, enim voluptate fugiat!
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="trailer w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-primary rounded-md">
                    Assistir Trailer
                  </button>
                  <button className="more w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-dark-2 rounded-md">
                    Saber Mais
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="content  w-full h-full flex justify-between"
              style={{
                backgroundImage:
                  "url(" +
                  "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg" +
                  ")",
              }}
            >
              <div className="filter w-full h-full absolute top-0 left-0 bg-dark opacity-70 z-0"></div>
              <div className="text flex flex-col md:gap-2   text-white p-4 max-w-xl z-50">
                <h3 className="font-semibold text-sm md:text-xl  text-white-blue">
                  Último Lançamento
                </h3>
                <h1 className=" font-bold text-xl md:text-4xl">
                  {" "}
                  Vingadores Ultimato 
                </h1>
                <p className="text-primary flex gap-2 text-xs md:text-sm mt-2 font-semibold  items-center">
                  <span className="idade">+16</span>•
                  <span className="ano">2020</span>•
                  <span className="type">Ação</span>•
                  <span className="tempo">3h10min</span>•
                  <div className="w-8 h-8 flex justify-center items-center">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={{
                        // Customize the root svg element
                        root: {},
                        // Customize the path, i.e. the "completed progress"
                        path: {
                          // Path color
                          stroke: `#5078ff`,
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Customize transition animation
                          transition: "stroke-dashoffset 0.5s ease 0s",
                          // Rotate the path
                          transform: "rotate(0.25turn)",
                          transformOrigin: "center center",
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                          // Trail color
                          stroke: "#d6d6d6",
                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "butt",
                          // Rotate the trail
                          transform: "rotate(0.25turn)",
                          transformOrigin: "center center",
                        },
                        // Customize the text
                        text: {
                          // Text color
                          fill: "#fff",
                          // Text size
                          fontSize: "28px",
                        },
                        // Customize background - only used when the `background` prop is true
                      }}
                    />
                  </div>
                </p>

                <p className="sinopse text-sm md:text-base flex max-h-10 overflow-hidden md:max-h-[100%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat commodi molestiae suscipit deserunt doloremque
                  consectetur quas sequi modi deleniti.
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="trailer w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-primary rounded-md">
                    Assistir Trailer
                  </button>
                  <button className="more w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-dark-2 rounded-md">
                    Saber Mais
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
