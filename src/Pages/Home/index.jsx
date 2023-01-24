import "./styles.css";
import { navHome } from "../../data";
import { NavigationBar } from "../../Templates/Navbar";

export const Home = () => (
  <main>
    <header className="header-h">
      <NavigationBar LinksList={navHome} buttonClass="home-btn" buttonText="Sign up free" />

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
  </main>

);