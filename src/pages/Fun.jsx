import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/global.css";
import FunHeader from "../components/FunHeader";
import FunChildrenPage from "./FunChildrenPage";
import { SliderTop } from "../components/SliderTop";
import { List } from "../components/List";
import { DadosContext } from "../context/ContextApp";

import { CircularProgress } from "@mui/material";
let url = window.location.href;

export function Fun() {
  const { type } = useParams();

  const {
    getIdOfGenresAndReturnDatas,
    nowPlaying,

    getPopular,
  } = useContext(DadosContext);
  const [popular, setPopular] = useState([]);

  const [acao, setAcao] = useState([]);
  const [movieAnimacao, setMovieAnimacao] = useState([]);
  const [moviePlayingNow, setMoviePlayingNow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const tvAction = await getIdOfGenresAndReturnDatas(
        "Action & Adventure",
        "tv",
        1
      );
      console.log(tvAction);
      setAcao(tvAction);

      const movieAnimacaoData = await getIdOfGenresAndReturnDatas(
        "Animação",
        "movie",
        1
      );
      setMovieAnimacao(movieAnimacaoData);

      const moviePlayingNowData = await nowPlaying("movie", 1);
      setMoviePlayingNow(moviePlayingNowData);

      const getPopularData = await getPopular("movie", 1);
      setPopular(getPopularData);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return (
    <div className="w-100% md:w-[calc(100%)]  md:p-8 py-6 px-4">
      <FunHeader />
      <div className="pb-20">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center pt-10 text-4xl text-white">
            <CircularProgress />
          </div>
        ) : type ? (
          <FunChildrenPage loading={loading} acaoTv={acao} />
        ) : (
          <>
            {" "}
            <SliderTop itens={moviePlayingNow} loading={loading} />
            <List
              acaoTv={acao}
              type={type}
              animacao={movieAnimacao}
              popular={popular}
            />
          </>
        )}
      </div>
    </div>
  );
}
