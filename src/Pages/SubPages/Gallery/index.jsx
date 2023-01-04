import { GalleryList } from "../../../Components/gallery-list";
import { galleryPosts } from "../../../data";
import "./style.css";

export const Gallery = () => (
  <section className="gallery mt-14 mx-auto flex flex-col justify-center items-center ">
    {/* CRIE UM OVERFLOW AQUI ASSIM COMO NA SECNAV, ADICIONE MAIS ELEMENTOS E TENTE CRIAR UM DESING APROPIADO OU SEMELHANTE AO SITE */}
    <div className=" w-11/12 md:w-9/12 lg:max-w-4xl">
      <div className="album-item flex rounded-lg justify-center items-center">
        <span className="text-white">Ko-fi Creators</span>
      </div>
    </div>

    <div className="mt-3 w-11/12 ">
      <div className=" flex justify-between items-center max-w-4xl px-5 w-full mx-auto">
        <div>
          <span className="font-bold text-xl ">Latest</span>
        </div>

        <div>
          {/* columns É MUITISSIMO IMPORTANTE USE PARA O SEU BENEFICIO */}
          <button className="px-5 py-2 rounded-full text-white flex font-bold gap-1" id="share">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 " viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
             Share
          </button>

        </div>
      </div>
    </div>

    <div className="w-full md:max-w-5xl max-md:px-4"> 
      <GalleryList values={galleryPosts}/>
    </div>
  </section>
)