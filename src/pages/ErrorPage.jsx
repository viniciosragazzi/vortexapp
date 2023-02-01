import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <p className="text-6xl text-white font-bold animate-bounce">
        Error <span className="text-white-blue">404!</span>
      </p>
      <p className="text-sm text-white mt-4">Pagina não encontrada!</p>
      <button
        onClick={handleClick}
        type="button"
        className=" w-24 text-sm m-8  py-2 text-white bg-primary hover:scale-95 transition-transform hover:opacity-95 rounded-full mt-6 absolute top-0 left-0"
      >
        Voltar
      </button>
    </div>
  );
}
