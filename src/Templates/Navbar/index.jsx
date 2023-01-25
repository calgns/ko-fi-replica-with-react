import { Link } from "react-router-dom";
import { memo } from "react/cjs/react.development";
import { NavLink } from "../../Components/NavLink";
import "./style.css";


function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

export const NavigationBar = memo( ({LinksList, buttonClass="default-btn", buttonText="Sign up" }) => {
  const currentUrl = window.location.pathname.toLowerCase()

  return (
  <nav id="nav" className="fixed w-full top-0 shadow-xl z-20">
    <div className="navbar justify-between max-w-3xl lg:max-w-6xl  m-auto flex p-3 ">
      <div className="logo mt-1 -ml-1">
        <Link to="/">
          {(currentUrl === "/"
            ? <img src="https://storage.ko-fi.com/cdn/Kofi_Logo_Blue.svg" className="w-24" alt="" /> 
            : <img src="https://storage.ko-fi.com/cdn/brandasset/logo_white_stroke_small.png" className="w-24" alt="" /> )}
        </Link>
      </div>
      <div className="flex items-center">
        {( currentUrl === "/" ? <a href="" className="log-in-mob font-bold mr-2 p-2 text-wheat sm:hidden hover:text-indigo-500">Log in</a> : "")}
        <button className={"left-btn "+buttonClass}>{buttonText}</button>
        <button className="btn-mobile text-4xl " onClick={toggleMenu}><span className="hamburger"></span></button>

        <ul className="menu flex font-bold items-center">
          {LinksList.map(a=>(<NavLink link={a.link} direction={a.direction} mob={a.mob} key={a.link + a.mob}/>))} 
          <li className={"mx-4 text-base "}><a href="#">Log In</a></li>
        </ul>
        <button className={buttonClass}>{buttonText}</button>
        
      </div>
    </div>
  </nav>);
});

