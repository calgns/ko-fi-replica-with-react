import { Link } from "react-router-dom";
import { memo } from "react/cjs/react.development";
import "./style.css";

// POSSO FAZER UM IF AQUI PARA CAUSAR O FOCUS ATARVES DE CLASSE OU DESCOBRIR OUTRO MEIO...

export const Secnav = memo(() => {
  return(
    <nav className="w-full sticky border-solid border-opacity-20 overflow-x-auto overflow-y-hidden z-10" id="nav-radios">
      <div className="flex mx-auto " id="div-radios">
        <ul className="flex font-bold text-md" id="ul">
          <li className="px-3">
            <Link className="p-1" to="About" id="li" >About</Link>
          </li>

          <li className="px-2">
            <Link className="p-1" to={"Gallery"} id="li" >Gallery</Link>
          </li>

          <li className="px-3">
            <Link className="p-1" to="Posts" id="li" >Posts</Link>
          </li>

          <li className="px-3">
            <Link className="p-1" to={"Shop"} id="li" >Shop</Link>
          </li>
      </ul>
    </div>
  </nav>
)}
);

