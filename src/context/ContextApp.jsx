import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const DadosContext = createContext({});
import appFetch from "../axios/axiosConfig";

const ContextProvider = ({ children }) => {
  const [menuShow, setMenuShow] = useState(false);
  const [language, setLanguage] = useState("pt-BR");
  const [genres, setGenres] = useState([]);

  let url = window.location.href;
  const { type } = useParams();
  const apiKey = "api_key=48389dae1608121c67850fc083cb62ce";
  const getGenres = async (type) => {
    try {
      const response = await appFetch.get(
        `genre/${type}/list?${apiKey}&language=${language}`
      );
      const data = await response.data;
      // console.log(data);
      setGenres(data.genres);
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
          `discover/${type}?${apiKey}&language=${language}&with_genres=${id}&page=${page}&include_video=true`
        );
        const data = await response.data;
        console.log(data, id)
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getIdOfGenresAndReturnDatas("Comédia", "movie", 1)
  }, [url]);

  return (
    <DadosContext.Provider
      value={{ menuShow, setMenuShow, genres, language, setLanguage,getIdOfGenresAndReturnDatas }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
