import React from "react";

export function List({ type }) {
  const typeName = location.pathname.split("/");
  const toCamelCase = (stg) => {
    let str = stg[2].split("");
    let palavraCerta = "";
    let p = "";
    const palavra = str.forEach((l, i) => {
      if (i != 0) {
        p += l;
      }
    });
    return (palavraCerta = str[0].toUpperCase() + p);
  };
  toCamelCase(typeName);
  return (
    <div>
      <h1 className="text-xl text-white">{toCamelCase(typeName)}</h1>
    </div>
  );
}
