import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DadosContext } from "../context/ContextApp";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CircularProgress } from "@mui/material";

export default function itemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(true);
  let url = window.location.href;
  const { id, type } = useParams();

  const { getDetail } = useContext(DadosContext);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const itemData = await getDetail(type, id);
      setItem(itemData);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  let navigate = useNavigate();

  function handleBack() {
    navigate(-1);
    console.log("111");
  }

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="w-full itemPage   py-6 md:py-0 text-white">
      {loading ? (
        <div className="h-52 md:h-80  flex justify-center items-center pt-10 text-4xl text-white">
          <CircularProgress />
        </div>
      ) : (
        <div className="header h-52 md:h-80 bg-center  p-4 overflow-hidden relative flex flex-col ">
          {!imageLoaded && (
            <div className="w-full h-full flex justify-center items-center">
              <CircularProgress />
            </div>
          )}
          <img
            className="w-full h-full absolute top-0 z-50 object-cover  self-center opacity-50"
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}`}
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
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
              <div className="text">aaaa</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
