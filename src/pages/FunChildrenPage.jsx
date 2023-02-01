import React from "react";
import { useParams } from "react-router-dom";
export default function FunChildrenPage(props) {
  const { type } = useParams();
  return (
    <div className="w-full">
      <p className="text-white text-2xl">{type.toLocaleUpperCase()}</p>
    </div>
  );
}
