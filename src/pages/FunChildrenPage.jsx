import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import appFetch from "../axios/axiosConfig";

import { List } from "../components/List";
import { SliderTop } from "../components/SliderTop";
export default function FunChildrenPage(props) {

  return (
    <div className="w-full">
      <SliderTop data={""} />
      <List type={location.pathname} />
    </div>
  );
}
