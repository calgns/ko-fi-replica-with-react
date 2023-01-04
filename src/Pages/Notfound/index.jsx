import { NavigationBar } from "../../Templates/Navbar";
import { navBlog } from "../../data";

export const NotFound = () => (
  <>
    <NavigationBar LinksList={navBlog}/>
    <main className="grid w-full h-full self-center items-center text-center justify-center">
      {/* <h2 className="font-bold text-4xl " >Error: 404!</h2> */}
      <div className="mt-10">
        <span className="font-semibold text-3xl ">Not Found</span>
        <p className="text-lg my-5"> Did not found the page or it does not exists </p>
        <button className="mt-5">
          <a href="/blog" className="px-6 py-2 font-bold text-lg bg-black border-solid border-gray-400 border-4 rounded-full" > Go Back!</a>
          {/* mais pro futuro troco por link quando tiver cache */}
        </button>
      </div>
    </main>
  </>
)