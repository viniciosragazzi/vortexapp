import { ChatsCircle, GameController, Popcorn, Skull } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";
import GamepadOutlinedIcon from "@mui/icons-material/GamepadOutlined";

import Logo from "../assets/vortex.png";
import { Avatar } from "@mui/material";
export function MenuNavigation(props) {
  return (
    <nav className="w-screen h-12 fixed bottom-0 bg-dark flex justify-between items-center z-50 md:max-w-[80px] md:h-full md:flex-col py-4">
      <div className="logo w-full max-w-[48px] h-full max-h-[48px]  justify-center items-center hidden md:flex">
        <img className="w-full max-w-[28px]" src={Logo} alt="Logo" />
      </div>
      <ul className="flex w-full h-full text-slate-500 justify-center items-center gap-10  md:flex-col ">
        <NavLink to="/fun" activeClassName>
          <Popcorn size={24} />
        </NavLink>
        <NavLink to="/animes" activeClassName>
          <Skull size={24} />
        </NavLink>
        <NavLink to="/games" activeClassName>
          <GamepadOutlinedIcon size={24} />
        </NavLink>
        <NavLink to="/community" activeClassName>
          <ChatsCircle size={24} />
        </NavLink>
      </ul>
      <div className="avatar hidden md:flex">
        <Avatar
          sx={{ width: 28, height: 28 }}
          alt="Remy Sharp"
          src="https://i.pravatar.cc/150?img=3
"
        />
      </div>
    </nav>
  );
}
