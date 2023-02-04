import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "../styles/global.css";
import FunHeader from "../components/FunHeader";
import FunChildrenPage from "./FunChildrenPage";
import { SliderTop } from "../components/SliderTop";
import { List } from "../components/List";
import { DadosContext } from "../context/ContextApp";

import appFetch from "../axios/axiosConfig";
import { CircularProgress } from "@mui/material";

export function Fun() {
  const { type } = useParams();

  const {
    getIdOfGenresAndReturnDatas,
    nowPlaying,
    loading,
    setLoading,
    getPopular,
  } = useContext(DadosContext);
  const [popular, setPopular] = useState([]);

  const [acao, setAcao] = useState([]);
  const [movieAnimacao, setMovieAnimacao] = useState([]);
  const [moviePlayingNow, setMoviePlayingNow] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const tvAction = await getIdOfGenresAndReturnDatas(
        "Action & Adventure",
        "tv",
        1
      );
      setAcao(tvAction.results);

      const movieAnimacaoData = await getIdOfGenresAndReturnDatas(
        "Animação",
        "movie",
        1
      );
      setMovieAnimacao(movieAnimacaoData.results);

      const moviePlayingNowData = await nowPlaying("movie", 1);
      setMoviePlayingNow(moviePlayingNowData);

      const getPopularData = await getPopular("movie", 1);
      setPopular(getPopularData);
    }
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="w-100% md:w-[calc(100%)]  md:p-8 py-6 px-4">
      <FunHeader />
      <div className="pb-20">
        {loading ? (
          <div className="w-screen h-screen flex justify-center items-center pt-10 text-4xl text-white">
            <CircularProgress />
          </div>
        ) : type ? (
          <FunChildrenPage />
        ) : (
          <>
            {" "}
            <SliderTop itens={moviePlayingNow} loading={loading} />
            <List
              type={type}
              acao={acao}
              animacao={movieAnimacao}
              popular={popular}
            />
          </>
        )}
      </div>
    </div>
  );
}
