import { Popcorn } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useLocation, NavLink, useMatch } from "react-router-dom";
import { List } from "../components/List";
import { SliderTop } from "../components/SliderTop";

import "../styles/global.css";

export function Home() {
  const location = useLocation();
  useEffect(() => {
    console.log("Navegação alterada: ", location.pathname);
  }, [location]);

  const isRouteHome = useMatch("/fun");
  return (
    <div className="w-100% md:w-[calc(100%)] h-screen md:p-8 py-6 px-4">
      <div className="header mb-12">
        <nav className="flex justify-between w-full items-center">
          <ul className="text-white flex gap-4 text-xs items-center md:gap-6 md:text-base">
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
            <NavLink to={"/fun/premieres"} activeClassName={"active"}>
              Lançamentos
            </NavLink>
            <NavLink to={"/fun/top"} activeClassName={"active"}>
              Bombando
            </NavLink>
          </ul>
        </nav>
      </div>
      {isRouteHome ? (
        <div>
          <SliderTop />
          <List type={location.pathname} />
        </div>
      ) : (
        <List type={location.pathname} />
      )}
    </div>
  );
}
