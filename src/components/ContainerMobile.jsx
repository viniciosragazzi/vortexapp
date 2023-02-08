import React from "react";
import { useContext } from "react";
import { DadosContext } from "../context/ContextApp";
import CloseIcon from "@mui/icons-material/Close";
export function ContainerMobile(props) {
  const { menuShow, setMenuShow } = useContext(DadosContext);

  return (
    <div
      className={`containerMobile w-screen h-screen fixed left-0 top-0  z-[900]  transition-transform bg-dark-2 p-6 ${
        menuShow ? "translate-x-0" : "translate-x-[-200vw]"
      }`}
    >
      <div
        className="icon"
        onClick={() => {
          setMenuShow(false);
        }}
      >
        <CloseIcon
          size={28}
          className="absolute top-0 right-0 m-6 text-primary cursor-pointer"
        />
      </div>
    </div>
  );
}
