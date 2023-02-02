import { Popcorn } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useLocation, NavLink, useMatch } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function FunHeader(props) {
  return (
    <div className="header mb-5 md:mb-12 w-full">
      <nav className="flex flex-col md:flex-row gap-3 justify-between w-full items-center">
        <ul className="text-white flex gap-4 sm:gap-5 sm:text-sm text-xs items-center md:gap-6 md:text-base">
          <NavLink to={`/fun`} activeClassName={"active"}>
            {" "}
            <Popcorn size={24} />
          </NavLink>
          <NavLink to={"/fun/series"} activeClassName={"active"}>
            Séries
          </NavLink>
          <NavLink to={"/fun/movies"} activeClassName={"active"}>
            Filmes
          </NavLink>
          <NavLink to={"/fun/lasted"} activeClassName={"active"}>
            Lançamentos
          </NavLink>
          <NavLink to={"/fun/top"} activeClassName={"active"}>
            Bombando
          </NavLink>
        </ul>
        <div className="search w-full h-8 flex items-center justify-center md:justify-end ">
          <div className="searchBox w-full max-w-[240px] h-full bg-slate-800 overflow-hidden rounded-full flex items-center">
            <SearchIcon className="text-white ml-2" />{" "}
            <input
              type="text"
              className="w-full h-full bg-transparent focus:border-none focus:outline-none text-white text-sm pl-2"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
