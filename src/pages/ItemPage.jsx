import React, { useContext, useEffect, useState } from "react";
import { DadosContext } from "../context/ContextApp";

export default function ItemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(true);
  let url = window.location.href;

  const { getIndividualItem } = useContext(DadosContext);

//   useEffect(() => {
//     setLoading(true);

//     async function fetchData() {
//       const individualItem = await getIndividualItem(
//         id,
//         "tv",
        
//       );
//     //   setItem(individualItem.results);

//       setLoading(false);
//     }
//     fetchData();
//   }, [url]);
  return (
    <div className="w-full h-full">
      <h1>Individual Page</h1>
    </div>
  );
}
