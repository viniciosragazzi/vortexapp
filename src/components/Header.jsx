import { useContext } from "react";

import Logo from "../assets/vortex.png";
import MenuIcon from "@mui/icons-material/Menu";
import { ContainerMobile } from "./ContainerMobile";

import { DadosContext } from "../context/ContextApp";

export function Header(props) {
  const { menuShow, setMenuShow } = useContext(DadosContext);

  return (
    <nav className="flex md:hidden w-full h-full max-h-12 justify-between p-6 text-white ">
      <ContainerMobile />
      <div className="logo">
        <img className="w-full max-w-[28px]" src={Logo} alt="" />
      </div>
        
     <div className="icon" onClick={()=>{setMenuShow(true)}} >
     <MenuIcon
        className="cursor-pointer hover:text-primary transition-all outline-none shadow-none"
        size={28}
      />
     </div>
    </nav>
  );
}
