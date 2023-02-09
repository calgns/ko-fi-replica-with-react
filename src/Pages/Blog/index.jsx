import { NavigationBar } from "../../Templates/Navbar";
import { Secnav } from "../../Templates/Secnav";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { navBlog } from "../../data";
import "./style.css";



export const Blog = () => {  
  const numberRef = useRef(0);
  const [count, setCount] = useState(0);
  const currentUrl = window.location.pathname.toLowerCase()
  const navigate = useNavigate()
  
  useEffect(()=>{
    numberRef.current = Math.round(Math.random()*100);
    if(currentUrl === "/blog") navigate("about")
  })

  return (
  <>
    <header>
      <NavigationBar LinksList={navBlog} buttonClass="blog-btn" buttonText="Start a page" />
      <main className="claus-main">
        <div className="w-full h-full">
          <div className="claus-img rounded-b-xl "></div>
        </div>
        {/* <img src="https://storage.ko-fi.com/cdn/useruploads/png_0a183732-dcce-4dc1-ae83-9637d71e49edcover.jpg?v=cfde61cb-f1e5-4014-8bb8-916b61182f1a" className="rounded-b-xl" alt="" /> */}

        {/* BLOG PROFILE */}
        <section className="profile flex justify-between items-center sm:p-0 md:px-4 lg:p-0  ">
          <div className="user-profile flex max-md:flex-col justify-start items-center">
            <div className="user-img ">
              <img
                src="https://storage.ko-fi.com/cdn/useruploads/efb123e7-f6d4-476c-9045-0428bd0d0677.png"
                className="rounded-full border-zinc-900 border-4 border-solid"
                alt=""
              />
            </div>

            <div className="user ml-3 mt-1">
              <h3 className="user-name font-bold text-2xl">Ko-fi</h3>
              <p className="followers ">2,8M Followers {numberRef.current}-{count}</p>
            </div>
          </div>

          <div className="flex flex-row justify-end items-center gap-2 sm:pr-3 xl:pr-0">
            <button onClick={()=>setCount(prevC=>prevC+1)} className="donate sm:flex hidden rounded-full font-bold items-center text-gray-50 text-xl w-52 h-12 px-5 py-2 ">
              <img
                src="https://storage.ko-fi.com/cdn/cup-border.png"
                className="w-6 h-4 ml-auto mr-1"
                alt=""
              />
              <span className="ml-1 mr-auto">Donate</span>
            </button>
            <button  className="follow rounded-full font-bold h-11 md:h-12 max-md:mr-4 px-4 py-1">
              <span>Follow</span>
            </button>
          </div>
        </section>
      </main>
    </header>

    <Secnav />

    <Outlet/>

    {/* <span>PROCURE SOBRE ROUTER E CONTINUE AULA 58.</span> */}
  </>)
};
