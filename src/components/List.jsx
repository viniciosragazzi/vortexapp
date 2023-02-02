import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { CircularProgressbar } from "react-circular-progressbar";

//context

export function List({ type, acao, animacao }) {
  console.log(animacao);
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
          {!type ? "Series de" : ""} Ação e Aventura
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
        <h1 className="text-white text-xl font-semibold mb-4">
          {" "}
          {!type ? "Filmes de" : ""} Animação
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
          {animacao?.map((item) => (
            <SwiperSlide key={item.id} className="overflow-hidden">
              <img
                className=" w-full absolute opacity-40  "
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              />
              <div className="text flex   items-center w-full  text-white p-2 z-50">
                <div className="txt  flex flex-col text-start ">
                  <h1 className=" font-bold text-xl md:text-4xl">
                    {item.title}
                  </h1>
                  <p className="text-white-blue flex gap-2 text-xs md:text-sm mt-2 font-semibold  items-center">
                    <span className="idade">{}</span>•
                    <span className="ano">2023</span>•
                    <span className="type">Ação</span>•
                    <span className="tempo">2h50min</span>•
                    <div className="w-8 h-8 flex justify-center items-center">
                      <CircularProgressbar
                        value={item.vote_average * 10}
                        text={`${item.vote_average * 10}%`}
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

                  <p className="sinopse text-sm md:text-base flex max-h-10 overflow-hidden  ">
                     {item.overview}
                  </p>

                  <div className="flex gap-4 mt-2">
                    <button className="trailer w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-primary hover:scale-95 text-dark-2 hover:opacity-95  transition-all rounded-md">
                      Assistir Trailer
                    </button>
                    <button className="more w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-dark-2 rounded-md hover:scale-95">
                      Saber Mais
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
