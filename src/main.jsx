import React from 'react';
import './Global.css';
import ReactDOM from 'react-dom';
import { Blog } from './Pages/Blog';
import { About } from './Pages/SubPages/About';
import { NotFound } from './Pages/Notfound';
import { AllPosts } from './Pages/SubPages/AllPosts';
import { Gallery } from './Pages/SubPages/Gallery';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Shop } from './Pages/SubPages/Shop';

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
        <Route path='*' element={<NotFound />}/>
        {/* <Route path='/' element={<Home />}/> */}

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
const SecObs = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    // console.log(entry.isIntersecting ? "Intersecting" : "Not Intersecting");
    if(!entry.isIntersecting) {NavId.classList.add("hidden"); NavIdR.classList.add("appears"); main.classList.add("mb-20");}
    else {NavId.classList.remove("hidden"); NavIdR.classList.remove("appears"); main.classList.remove("mb-20");}

  })}, SecOpt);
SecObs.observe(claus)
