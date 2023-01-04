import React from 'react';
import './Global.css';
import ReactDOM from 'react-dom';
import { Blog } from './Pages/Blog';
import { About } from './Pages/About';
import { NotFound } from './Pages/Notfound';
import { AllPosts } from './Pages/AllPosts';
import { Gallery } from './Pages/Gallery';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Shop } from './Pages/Shop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Blog' element={<Blog />}>
          <Route path='About' element={<About/>} />
          <Route path='Gallery' element={<Gallery />} />
          <Route path='Posts' element={<AllPosts />} />
          <Route path='Shop' element={<Shop />} />
        </Route>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
, document.getElementById('root'));

const claus = document.querySelector(".claus-img");
const main = document.querySelector("main");
const NavId = document.querySelector("#nav");
const NavIdR = document.querySelector("#nav-radios");
//Top //Right //Bottom //Left
const SecOpt = {rootMargin:"8% 0px 0px 0px"};
const SecObs = new IntersectionObserver((entries, SecObs)=>{
  entries.forEach(entry=>{
    console.log(entry.isIntersecting);
    if(!entry.isIntersecting) {NavId.classList.add("hidden"); NavIdR.classList.add("appears"); main.classList.add("mb-20");}
    else {NavId.classList.remove("hidden"); NavIdR.classList.remove("appears"); main.classList.remove("mb-20");}

  })}, SecOpt);
SecObs.observe(claus)


// window.addEventListener("scroll", ()=>(console.log(window.pageYOffset)))

/*window.onload = ()=>{
  const sm = 420;
  const md = 850;
  const largura = window.innerWidth;

  if(largura <= sm) {
    console.log("Mobile")
    window.addEventListener("scroll", ()=>{
      if(Math.round(window.pageYOffset) >= 270) {NavId.classList.add("hidden"); NavIdR.classList.add("appears"); main.classList.add("mb-20");}
      else {NavId.classList.remove("hidden"); NavIdR.classList.remove("appears"); main.classList.remove("mb-20");}
    })
    return;
  }

  if(largura <= md) {
    console.log("Tablet")
    window.addEventListener("scroll", ()=>{
      if(Math.round(window.pageYOffset) >= 370) {NavId.classList.add("hidden"); NavIdR.classList.add("appears"); main.classList.add("mb-12");}
      else {NavId.classList.remove("hidden"); NavIdR.classList.remove("appears"); main.classList.remove("mb-12");}
    })
    return;
  }

  console.log("Laptop")
  window.addEventListener("scroll", ()=>{
    if(Math.round(window.pageYOffset) >= 450) {NavId.classList.add("hidden"); NavIdR.classList.add("appears"); main.classList.add("mb-12");}
    else {NavId.classList.remove("hidden"); NavIdR.classList.remove("appears"); main.classList.remove("mb-12");}
  })
}*/