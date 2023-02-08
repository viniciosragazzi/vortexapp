import { CircularProgress } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { List } from "../components/List";
import { SliderTop } from "../components/SliderTop";
import { DadosContext } from "../context/ContextApp";
export default function FunChildrenPage({ acaoTv }) {
  let url = window.location.href;
  const { type } = useParams();
  const typeConverted =
    type === "series" ? "tv" : type === "movies" ? "movie" : "";

  const { nowPlaying, getIdOfGenresAndReturnDatas, getPopular } =
    useContext(DadosContext);
  const [playingNow, setPlayingNow] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [popular, setPopular] = useState([]);
  const [acaoMovie, setAcaoMovie] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const nowPlayingData = await nowPlaying(typeConverted, 1);
      setPlayingNow(nowPlayingData);

      const animationItens = await getIdOfGenresAndReturnDatas(
        "Animação",
        typeConverted,
        1
      );
      setAnimation(animationItens);

      const getPopularData = await getPopular(typeConverted, 1);
      setPopular(getPopularData);

      const movieAction = await getIdOfGenresAndReturnDatas("Ação", "movie", 1);
      setAcaoMovie(movieAction);

      setLoading(false);
    }
    fetchData();
  }, [url, type]);

  return (
    <div className="w-full">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center pt-10 text-4xl text-white">
          <CircularProgress />
        </div>
      ) : (
        <>
          <SliderTop itens={playingNow} loading={loading} />
          <List
            type={location.pathname}
            animacao={animation}
            popular={popular}
            acaoTv={acaoTv}
            acao={acaoMovie}
          />
        </>
      )}
    </div>
  );
}
