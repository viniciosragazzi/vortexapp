import React, { useEffect, useContext, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { CircularProgressbar } from "react-circular-progressbar";
//context
import { DadosContext } from "../context/ContextApp";
import { useParams, useNavigate } from "react-router-dom";

export function List({ animacao, popular, acaoTv, acao }) {
  const { getVideosById, getIndividualItem } = useContext(DadosContext);
  const timeOutRef = useRef();
  const [hoverId, setHoverIndex] = useState(-1);
  let url = window.location.href;

  const onMouseEnterFunc = (id) => {
    timeOutRef.current = setTimeout(() => {
      setHoverIndex(id);
    }, 350);
  };

  const onMouseLeaveFunc = () => {
    setHoverIndex(-1);

    clearInterval(timeOutRef.current);
  };
  const { type } = useParams();
  const typeConverted =
    type === "series" ? "tv" : type === "movies" ? "movie" : "";
  let acaoItem = typeConverted === "tv" || typeConverted === "" ? acaoTv : acao;

  useEffect(() => {}, [url]);
  return (
    <div className="flex flex-col gap-14">
      <div className="listSlide h-56 mt-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold mb-4 ">
            Tops da Semana
          </h1>
          <span className="text-white-blue mr-16 cursor-pointer hover:opacity-90 transition-opacity">
            Ver todos
          </span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1444: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {popular?.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={`overflow-hidden ${
                item.id === hoverId ? "classMouseEnter" : "classMouseLeave"
              }`}
              onMouseEnter={() => {
                onMouseEnterFunc(item.id);
              }}
              onMouseLeave={() => {
                onMouseLeaveFunc();
              }}
            >
              <img
                className=" w-full absolute opacity-40  "
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              />
              <div className="text flex pt-10   mt-3  items-center w-full  text-white p-2 z-50">
                <div className="txt  flex flex-col text-start ">
                  <h1 className=" font-bold text-base md:text-xl  w-full max-w-xs  ">
                    {!type
                      ? item.title
                      : type === "series"
                      ? item.name
                      : item.title}
                  </h1>
                  <p className=" infos text-white-blue flex gap-2 text-sm  mt-1 font-semibold  items-center">
                    <span className="ano">
                      {item.release_date
                        ? item.release_date.split("-", 1)
                        : item.last_air_date.split("-", 1)}
                    </span>
                    •
                    <span className="type flex gap-2">
                      {item.genres[0]?.name}
                    </span>
                    •<span className="tempo">2h50min</span>•
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
                            fontSize: "32px",
                          },
                          // Customize background - only used when the `background` prop is true
                        }}
                      />
                    </div>
                  </p>

                  <p className="sinopse w-full text-sm   max-h-14 overflow-hidden  ">
                    {item.overview}
                  </p>

                  <div className="flex gap-4  buttonArea">
                    <button
                      onClick={() =>
                        getVideosById(item.id, type ? typeConverted : "movie")
                      }
                      className="trailer w-full  h-7 flex items-center justify-center text-sm font-semibold hover:scale-95 text-white hover:opacity-95  transition-all rounded-md"
                    >
                      Assistir Trailer
                    </button>
                    <button
                      className="more w-full  h-7 flex items-center justify-center text-sm font-semibold bg-dark-2 rounded-md hover:scale-95"
                      onClick={() => {
                        getIndividualItem(item.id, item.name ? "tv" : "movie");
                      }}
                    >
                      Saber Mais
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="listSlide h-56 mt-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold mb-4">
            {!type
              ? "Ação e Aventura"
              : type === "movies"
              ? "Filmes de Ação"
              : "Ação e Aventura"}
          </h1>
          <span className="text-white-blue mr-16 cursor-pointer hover:opacity-90 transition-opacity">
            Ver todos
          </span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1444: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {acaoItem?.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={`overflow-hidden ${
                item.id === hoverId ? "classMouseEnter" : "classMouseLeave"
              }`}
              onMouseEnter={() => {
                onMouseEnterFunc(item.id);
              }}
              onMouseLeave={() => {
                onMouseLeaveFunc();
              }}
            >
              <img
                className=" w-full absolute opacity-40  "
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              />
              <div className="text flex pt-10   items-center w-full  text-white p-2 z-50">
                <div className="txt  flex flex-col text-start ">
                  <h1 className=" font-bold text-base md:text-xl  w-full max-w-xs  ">
                    {!type
                      ? item.name
                      : type === "series"
                      ? item.name
                      : item.title}
                  </h1>
                  <p className="text-white-blue flex gap-2 text-sm  mt-1 font-semibold  items-center">
                    <span className="ano">
                      {item.release_date
                        ? item.release_date.split("-", 1)
                        : item.last_air_date.split("-", 1)}
                    </span>
                    •
                    <span className="type flex gap-2">
                      <span>{item.genres[1].name}</span>
                    </span>
                    •<span className="tempo">2h50min</span>•
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
                            fontSize: "32px",
                          },
                          // Customize background - only used when the `background` prop is true
                        }}
                      />
                    </div>
                  </p>

                  <p className="sinopse w-full text-sm    overflow-hidden flex items-start  ">
                    <span>{item.overview}</span>{" "}
                    <span className="flex-1 self-end">...</span>
                  </p>
                  <div className="flex gap-4  buttonArea">
                    <button
                      onClick={() =>
                        getVideosById(item.id, type ? typeConverted : "tv")
                      }
                      className="trailer w-full  h-7 flex items-center justify-center text-sm font-semibold hover:scale-95 text-white hover:opacity-95  transition-all rounded-md"
                    >
                      Assistir Trailer
                    </button>
                    <button
                      className="more w-full  h-7 flex items-center justify-center text-sm font-semibold bg-dark-2 rounded-md hover:scale-95"
                      onClick={() => {
                        getIndividualItem(item.id, item.name ? "tv" : "movie");
                      }}
                    >
                      Saber Mais
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="listSlide h-56 mt-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold mb-4">
            {" "}
            {!type ? "Filmes de" : ""} Animação
          </h1>
          <span className="text-white-blue mr-16 cursor-pointer hover:opacity-90 transition-opacity">
            Ver todos
          </span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1444: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {animacao?.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={`overflow-hidden ${
                item.id === hoverId ? "classMouseEnter" : "classMouseLeave"
              }`}
              onMouseEnter={() => {
                onMouseEnterFunc(item.id);
              }}
              onMouseLeave={() => {
                onMouseLeaveFunc();
              }}
            >
              <img
                className=" w-full absolute opacity-40  "
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
              />
              <div className="text flex pt-10   items-center w-full  text-white p-2 z-50">
                <div className="txt  flex flex-col text-start ">
                  <h1 className=" font-bold text-base md:text-xl  w-full max-w-xs  ">
                    {!type
                      ? item.title
                      : type === "series"
                      ? item.name
                      : item.title}
                  </h1>
                  <p className="text-white-blue flex gap-2 text-sm  mt-1 font-semibold  items-center">
                    <span className="ano">
                      {item.release_date
                        ? item.release_date.split("-", 1)
                        : item.last_air_date.split("-", 1)}
                    </span>
                    •
                    <span className="type flex gap-2">
                      <span>{item.genres[1].name}</span>
                    </span>
                    •<span className="tempo">2h50min</span>•
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
                            fontSize: "32px",
                          },
                          // Customize background - only used when the `background` prop is true
                        }}
                      />
                    </div>
                  </p>

                  <p className="sinopse w-full text-sm   max-h-14 overflow-hidden  ">
                    {item.overview}
                  </p>

                  <div className="flex gap-4  buttonArea">
                    <button
                      onClick={() =>
                        getVideosById(item.id, type ? typeConverted : "movie")
                      }
                      className="trailer w-full  h-7 flex items-center justify-center text-sm font-semibold hover:scale-95 text-white hover:opacity-95  transition-all rounded-md"
                    >
                      Assistir Trailer
                    </button>
                    <button
                      className="more w-full  h-7 flex items-center justify-center text-sm font-semibold bg-dark-2 rounded-md hover:scale-95"
                      onClick={() => {
                        getIndividualItem(item.id, item.name ? "tv" : "movie");
                      }}
                    >
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
