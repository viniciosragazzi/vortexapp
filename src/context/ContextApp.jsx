import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const DadosContext = createContext({});
import appFetch from "../axios/axiosConfig";

const ContextProvider = ({ children }) => {
  const [menuShow, setMenuShow] = useState(false);
  const [language, setLanguage] = useState("pt-BR");
  const [genres, setGenres] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [loading, setLoading] = useState(true);

  let url = window.location.href;
  const { type } = useParams();
  const apiKey = "api_key=48389dae1608121c67850fc083cb62ce";
  
  const getGenres = async (type) => {
    try {
      const response = await appFetch.get(
        `genre/${type}/list?${apiKey}&language=${language}`
      );
      const data = await response.data;
      setGenres(data.genres);
      console.log(data, type);
      return data.genres;
    } catch (e) {
      console.log(e);
    }
  };

  const getIdOfGenresAndReturnDatas = async (name, type, page) => {
    const genresFiltered = await getGenres(type);
    const found = genresFiltered.find((e) => e.name === name);
    const id = found.id;
    if (id) {
      try {
        const response = await appFetch.get(
          `discover/${type}?${apiKey}&language=${language}&with_genres=${id}&page=${page}&include_video=true&sort_by=popularity.desc&region=BR&watch_region=BR&`
        );
        const data = await response.data;

        const promises = data.results.map((movie) => getDetail(type, movie.id));
        const dataAndDetail = await Promise.all(promises);
    
        
        return dataAndDetail;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getVideosById = async (id, type) => {
    try {
      const response = await appFetch.get(
        `/${type}/${id}/videos?${apiKey}&language=${language}`
      );
      const data = await response.data;
      let key;

      if (data.results[0]) {
        key = data.results[0].key.replace(/^'|'$/g, "");
        window.open(`https://youtu.be/${key}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const nowPlaying = async (type, page) => {
    try {
      const response = await appFetch.get(
        `${type}/${
          type === "movie" ? "now_playing" : "on_the_air"
        }?${apiKey}&language=${language}&page=${page}&region=BR`
      );
      const data = response.data;
        
      const promises = data.results.map((movie) => getDetail(type, movie.id));
      const dataAndDetail = await Promise.all(promises);
  
      return dataAndDetail;
    } catch (error) {
      console.log(error);
    }
  };

  const getPopular = async (type, page) => {
    try {
      const response = await appFetch.get(
        `${type}/popular?${apiKey}&language=${language}&page=${page}&region=BR`
      );
      const data = response.data;
      
      const promises = data.results.map((movie) => getDetail(type, movie.id));
      const dataAndDetail = await Promise.all(promises);
  
      return dataAndDetail;
    } catch (e) {
      console.log(e);
    }
  };

  const getDetail = async (type, id) => {
    try {
      const response = await appFetch.get(
        `${type}/${id}?${apiKey}&language=${language}`
      );
      const details = response.data;
      return details;
    } catch (e) {
      console.log(e);
    }
  };

  const navigateId = useNavigate();

  const getIndividualItem = async (idItem, type) => {
    navigateId(`/fun/${type}/${idItem}`);

  };
  useEffect(() => {
    console.clear()
  }, [url]);

  return (
    <DadosContext.Provider
      value={{
        menuShow,
        setMenuShow,
        genres,
        language,
        setLanguage,
        getIdOfGenresAndReturnDatas,
        getVideosById,
        currentVideo,
        nowPlaying,
        loading,
        setLoading,
        getPopular,
        getIndividualItem,
        getDetail,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
