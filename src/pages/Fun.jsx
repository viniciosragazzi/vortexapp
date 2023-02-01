import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { List } from "../components/List";
import { SliderTop } from "../components/SliderTop";
import "../styles/global.css";
import FunHeader from "../components/FunHeader";
import FunChildrenPage from "./FunChildrenPage";

export function Fun() {
  const { type } = useParams();

  return (
    <div className="w-100% md:w-[calc(100%)]  md:p-8 py-6 px-4">
      <FunHeader />
      <div className="pb-10 md:pb-20">
        {type ? (
          <FunChildrenPage />
        ) : (
          <>
            <SliderTop />
            <List type={location.pathname} />
          </>
        )}
      </div>
    </div>
  );
}
