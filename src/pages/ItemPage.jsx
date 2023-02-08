import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DadosContext } from "../context/ContextApp";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CircularProgress } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
export default function itemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(true);
  let url = window.location.href;
  const { id, type } = useParams();

  const { getDetail, getVideosById } = useContext(DadosContext);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const itemData = await getDetail(type, id);
      setItem(itemData);
      console.log(itemData);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  let navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="w-full itemPage   py-6 md:py-0 text-white z-10">
      {loading ? (
        <div className="h-52 md:h-80  flex justify-center items-center pt-10 text-4xl text-white">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="header h-52 md:h-80 bg-center  p-4 overflow-hidden relative flex flex-col ">
            {!imageLoaded && (
              <div className="w-full h-full flex justify-center items-center">
                <CircularProgress />
              </div>
            )}
            <img
              className="w-full h-full absolute top-0 z-50 object-cover  self-center opacity-40 imgTop"
              src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}`}
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            <div className="bottom"></div>
            <div
              style={{ display: imageLoaded ? "block" : "none" }}
              className=" text flex gap-8   w-full h-full absolute top-0   text-white p-2 z-50"
            >
              <div className="content w-full h-full relative">
                <div
                  className="icon cursor-pointer"
                  onClick={() => {
                    handleBack();
                  }}
                  onLoad={handleImageLoad}
                  style={{ display: imageLoaded ? "block" : "none" }}
                >
                  <ArrowBackIcon size={28} />
                </div>
              </div>
            </div>
          </div>
          <div className="content relative w-full h-full z-50 ">
            <div className="infos absolute w-full h-screen top-[-150px] flex flex-col md:flex-row  p-5  md:p-10">
              <div className="cardArea flex flex-col gap-10 w-full md:max-w-xs items-center md:items-start">
                <div className="card relative max-w-[150px] md:mr-3 sm:max-w-[200px] overflow-hidden rounded-md ">
                  <img
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                    className={"h-full w-full"}
                    alt=""
                  />
                </div>

                <div className=" text-white flex items-center gap-5">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                    <CircularProgressbar
                      value={item.vote_average * 10}
                      text={`${item.vote_average.toFixed(1)}`}
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
                  <div className="flex flex-col">
                    <p>
                      {item.popularity}{" "}
                      <span className="text-zinc-400 pl-1">ratings</span>
                    </p>
                    <p>
                      {item.vote_count}{" "}
                      <span className="text-zinc-400 pl-1">reviews</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="textArea w-full h-full flex flex-col gap-2 justify-start items-start pt-10">
                <header className="flex flex-col gap-1">
                  <h1 className="text-white font-bold text-3xl">
                    {item.name ? item.name : item.title}
                  </h1>
                  <p className="text-zinc-300 font-semibold">
                    Titulo original:{" "}
                    <span className="font-normal">
                      {item.original_title
                        ? item.original_title
                        : item.original_name}
                    </span>
                  </p>
                  {type === "tv" ? (
                    <p className="flex gap-2 text-sm md:text-base">
                      <span className="font-semibold flex gap-1">
                        Lançamento:
                        <span className="font-normal">
                          {item.release_date
                            ? item.release_date.split("-", 1)
                            : item.last_air_date.split("-", 1)}
                        </span>
                      </span>
                      •
                      <span className="font-semibold flex gap-1">
                        {item.number_of_seasons}
                        <span className="font-normal">Temporadas</span>
                      </span>
                      •
                      <span className="font-semibold flex gap-1">
                        {item.number_of_episodes}
                        <span className="font-normal">Episodios</span>
                      </span>
                    </p>
                  ) : (
                    <p className="flex gap-2">
                      <span className="font-semibold flex gap-1">
                        Lançamento:
                        <span className="font-normal">
                          {item.release_date
                            ? item.release_date.split("-", 1)
                            : item.last_air_date.split("-", 1)}
                        </span>
                      </span>
                      •
                      <span className="font-semibold flex gap-1">
                        Gênero:
                        <span className="font-normal">
                          {item.genres[0].name}
                        </span>
                      </span>
                    </p>
                  )}
                </header>
                <div className="content flex flex-col gap-2 w-full  ">
                  <div className="buttons flex h-[68px] items-center gap-6">
                    <button
                      onClick={() => getVideosById(item.id, "movie")}
                      className="trailer w-full max-w-[120px] h-10 flex items-center justify-center text-sm font-normal bg-primary-dark hover:scale-95 text-white hover:opacity-95  transition-all rounded-full"
                    >
                      Assistir Trailer
                    </button>

                    <div className="favItem w-full h-full  max-w-[36px] max-h-[36px] rounded-full border-2 border-white cursor-pointer flex justify-center items-center hover:scale-90 transition-transform">
                      <BookmarkBorderIcon />
                    </div>

                    <div className="favItem w-full h-full  max-w-[36px] max-h-[36px] rounded-full border-2 border-white cursor-pointer flex justify-center items-center hover:scale-90 transition-transform">
                      <ShareIcon />
                    </div>
                  </div>
                  <div className="text-overview text-zinc-400">
                    {item.overview}
                  </div>

                  <div className="details mt-5">
                    <h1 className="text-white font-semibold text-2xl">
                      Detalhes:
                    </h1>
                  </div>
                </div>
              </div>
              <div className="textArea w-full flex flex-col justify-start md:max-w-xs items-start">
                <header>
                  <h1 className="text-white font-bold text-2xl">
                    {item.name ? item.name : item.title}
                  </h1>
                </header>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
