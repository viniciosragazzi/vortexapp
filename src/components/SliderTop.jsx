import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/global.css";
import "swiper/css/effect-fade";
// import required modules
// import { EffectCoverflow } from "swiper";
import { Pagination, EffectFade, Autoplay } from "swiper";
import { DadosContext } from "../context/ContextApp";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
export function SliderTop({ itens }) {
  const { getVideosById, loading, setLoading, getIndividualItem } =
    useContext(DadosContext);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  const { type } = useParams();

  return (
    <div className="slider h-52 md:h-96 -z-10 mt-6 overflow-hidden">
      <div
        className={`absolute overflow-hidden w-[85%] h-60 md:h-96 flex justify-center items-center z-50 text-4xl ${
          !load ? "opacity-0 hidden" : "opacity-100"
        }`}
      >
        <CircularProgress />
      </div>
      <Swiper
        direction={"vertical"}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className={`mySwiper ${load ? "opacity-0" : "opacity-100"}`}
      >
        {itens
          .filter((item, index) => index < 6)
          .map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="content  w-full h-full flex justify-between bg-center bg-black"
                style={{
                  backgroundImage: item.backdrop_path
                    ? "url(" +
                      `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` +
                      ")"
                    : "none",
                }}
              >
                <div className="filter w-full h-full absolute top-0 left-0 bg-dark opacity-70 z-0"></div>
                <div className="text flex gap-8  items-center w-full  text-white p-2 z-50">
                  <div className="posterArea z-50   justify-center hidden md:flex ">
                    <img
                      className="border-2 border-red- max-w-[180px] rounded-md"
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="txt  max-w-3xl">
                    <h3 className="font-semibold text-sm md:text-xl  text-white-blue">
                      Último Lançamento
                    </h3>
                    <h1 className=" font-bold text-xl md:text-4xl">
                      {!type
                        ? item.title
                        : type === "series"
                        ? item.name
                        : item.title}
                    </h1>
                    <p className="text-primary flex gap-2 text-xs md:text-sm mt-1 font-semibold  items-center">
                      <span className="idade">+12</span>•
                      <span className="ano">
                        {item.release_date
                          ? item.release_date.split("-", 1)
                          : item.last_air_date.split("-", 1)}
                      </span>
                      •<span className="type">{item.genres[0]?.name}</span>•
                      <span className="tempo">2h50min</span>•
                      <div className="w-8 h-8 flex justify-center items-center">
                        <CircularProgressbar
                          value={item.vote_average * 10}
                          text={`${(item.vote_average * 10).toFixed(0)}%`}
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
                      {item.overview}
                    </p>

                    <div className="flex gap-4 mt-2 md:mt-6">
                      <button
                        onClick={() => getVideosById(item.id, "movie")}
                        className="trailer w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-primary-dark hover:scale-95 text-white hover:opacity-95  transition-all rounded-md"
                      >
                        Assistir Trailer
                      </button>
                      <button
                        onClick={() => {
                          getIndividualItem(
                            item.id,
                            item.name ? "tv" : "movie"
                          );
                        }}
                        className="more w-full max-w-[100px] h-8 flex items-center justify-center text-xs font-semibold bg-dark-2 rounded-md hover:scale-95"
                      >
                        Saber Mais
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
