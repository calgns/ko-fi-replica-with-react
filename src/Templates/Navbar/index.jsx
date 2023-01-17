import { memo } from "react/cjs/react.development";
import { NavLink } from "../../Components/NavLink";
import "./style.css";


function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

export const NavigationBar = memo(({LinksList}) => (
  <nav id="nav" className="fixed w-full top-0 shadow-xl z-20">
    <div className="navbar justify-between max-w-3xl lg:max-w-6xl  m-auto flex p-3 ">
      <div className="logo mt-1 -ml-1">
        <a>
          <img src="https://storage.ko-fi.com/cdn/brandasset/logo_white_stroke_small.png" className="w-24" alt="" />
          {/* <img src="https://storage.ko-fi.com/cdn/Kofi_Logo_Blue.svg" className="w-24" alt="" /> */}
        </a>
      </div>
      <div className="flex items-center">
        <button className="mob-btn mr-4 py-2 px-3 rounded-lg font-bold">Start a Page</button>
        <button className="btn-mobile text-4xl " onClick={toggleMenu}><span className="hamburger"></span></button>

        <ul className="menu flex font-bold items-center">
          <li className="mx-4 text-base"><a href="#">Log In</a></li>
          {LinksList.map(a=>(<NavLink link={a.link} direction={a.direction} mob={a.mob} key={a.link + a.mob}/>))} 
        </ul>
        <button className="nav-btn ml-2 p-2 rounded font-bold ">Start a Page</button>
      </div>
    </div>
  </nav>
));

