import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { memo } from "react";
import "./style.css";

// POSSO FAZER UM IF AQUI PARA CAUSAR O FOCUS ATARVES DE CLASSE OU DESCOBRIR OUTRO MEIO...

export const Secnav = memo(() => {
  let activeStyle = {
    // textDecoration: "underline",
    borderBottom: "aqua 3px solid",
    color: "aqua",
    // borderBottom: "#00ff04 3px solid",
    // color: "#09ff00",
    // borderBottom: "#ff2b2b 3px solid",
    // color: "#ff5c5c",
    paddingBottom: "15px",

  };
  let isActive = ({ isActive }) => isActive ? activeStyle : undefined;

  return(
    <nav className="w-full sticky border-solid border-opacity-20 overflow-x-auto overflow-y-hidden z-10" id="nav-radios">
      <div className="flex mx-auto " id="div-radios">
        <ul className="flex font-bold text-md" id="ul">
          <li className="px-3">
            <NavLink to="About" style={isActive} > About </NavLink>
          </li>

          <li className="px-3">
            <NavLink to="Gallery" style={isActive} > Gallery </NavLink>
          </li>

          <li className="px-3">
            <NavLink to="Posts" style={isActive} > Posts </NavLink>
          </li>

          <li className="px-3">
            <NavLink to="Shop" style={isActive} > Shop </NavLink>
          </li>
      </ul>
    </div>
  </nav>
)}
);

