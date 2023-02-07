import "./styles.css";
import { navHome } from "../../data";
import { NavigationBar } from "../../Templates/Navbar";
import { useState } from "react";
import { PopUp } from "../../Templates/Pop-up";

export const Home = () => {
  const [pop, setPop] = useState(false)

  return(
    <main>
      <NavigationBar LinksList={navHome} buttonClass="home-btn" buttonText="Sign up free" />
      <PopUp trigger={pop} setTrigger={setPop} pop={"sing"}/>

      <header className="header-h mx-auto">
        <section className={"relative top-14 mx-auto max-w-3xl flex flex-col items-center gap-5"} >
          <div className="px-5">
            <h1 className="sm:text-center text-4xl sm:text-5xl text-gradient font-extrabold sm:leading-tight pb-2" >Everything you need to make money doing what you love</h1>
            <p className="sm:text-center text-custom-p text-xl text-gray-400 ">Join 1M+ creators getting donations, memberships and sales from fans! </p>
          </div>

          <div className="text-center max-w-3xl w-full">
            <div className='mx-auto w-fit max-sm:px-2 mb-2'>
              <form action="" className="claim w-full rounded-full p-2 " >
                <div className="flex px-3 py-3">
                  <label htmlFor="claim-btn" className="flex ">
                    <span className="font-bold no-break pt-2 sm:pt-3 pr-1 text-xl">Ko-fi.com/</span>
                    <input type="text" id="claim" placeholder="yourname" className="border-none outline-none text-2xl" />
                  </label>
                  <button type="submit" className="claim-btn rounded-full font-bold sm:text-xl px-3 sm:px-5 py-2.5 sm:py-3">Claim</button>
                </div>
              </form>
            </div>
            <span className="text-gray-400 text-lg">$6 million earned on Ko-fi last month!</span>
          </div>
        </section>

        <div className="cartoon "></div>
      </header>

      <section className="donations text-center">

        <div className="mx-auto px-5 py-6 max-w-2xl grid gap-y-4 justify-items-center">
          <h2 className="font-bold text-3xl sm:text-4xl"> We take 0% of your donations</h2>
          <p className="text-xl sm:text-2xl text-opacity-60 text-white">We don't take a fee on each donation. Keep more of your money with Ko-fi. $200 million earned so far!</p>
          <button className="home-btn text-xl" style={{paddingBlock:"13px", display: "block"}} onClick={()=>setPop(true)} > <a href="#" className="px-2">Sing up free</a> </button>

          <div className="quotes gold flex max-sm:grid max-sm:grid-cols-4 gap-x-5 mt-2">
            <div className="quote">
              <div className="relative">
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
              </div>

              <div>
                <i className="text-white text-opacity-70 text-lg">"A wonderful creator-friendly platform"</i>
              </div>          
            </div>

            <div className="quote">
              <div className="relative">
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
              </div>

              <div>
                <i className="text-white text-opacity-70 text-lg">"Everything I need to make income doing what I love"</i>
              </div>          
            </div>

            <div className="quote">
              <div className="relative">
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
                <span className="material-symbols-outlined" >star</span>
              </div>

              <div>
                <i className="text-white text-opacity-70 text-lg">"Get paid for your passion and more!"</i>
              </div>          
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto"><img src="https://storage.ko-fi.com/cdn/landing_assets/kofi_second_heroimg.png" alt="" /></div>

      </section>
    </main>
  )
}