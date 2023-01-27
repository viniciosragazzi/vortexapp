import { createContext, useState, useEffect } from "react";
export const DadosContext = createContext({});
const ContextProvider = ({ children }) => {
  const [menuShow, setMenuShow] = useState(false)
  return <DadosContext.Provider value={{menuShow, setMenuShow}}>{children}</DadosContext.Provider>;
};

export default ContextProvider;
