import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { List } from "../components/List";
import { SliderTop } from "../components/SliderTop";
import { DadosContext } from "../context/ContextApp";
export default function FunChildrenPage(props) {
  let url = window.location.href;
  const { type } = useParams();
  const typeConverted =
    type === "series" ? "tv" : type === "movies" ? "movie" : "";

  const { nowPlaying, loading, setLoading,getIdOfGenresAndReturnDatas ,getPopular} = useContext(DadosContext);
  const [playingNow, setPlayingNow] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const nowPlayingData = await nowPlaying(typeConverted, 1);
      setPlayingNow(nowPlayingData);

      const animationItens = await getIdOfGenresAndReturnDatas('Animação', typeConverted, 1);
      setAnimation(animationItens.results);
      
      const getPopularData = await getPopular(typeConverted, 1);
      setPopular(getPopularData);
    }
    fetchData();
    setLoading(false)
  }, [type]);

  return (
    <div className="w-full">
      {loading ? (
          <div className="w-screen h-screen flex justify-center items-center pt-10 text-4xl text-white">
            <CircularProgress />
          </div>
        ) :<SliderTop itens={playingNow} loading={loading} />}
      
              
      <List type={location.pathname} animacao={animation} popular={popular}  />
    </div>
  );
}
