// import { GalleryItem } from "../gallery-item";
import "./style.css";

export const GalleryItems = ({values})=>(
  <ul className="w-full max-md:gap-2 mx-auto justify-center items-center grid gap-4 mt-10 ">
    {values.map(value=> 
      <li id="gli">
        <div className="gallery-item bg-no-repeat bg-cover bg-center rounded-2xl " 
          style={{backgroundImage: "url("+value.cover+')'}}></div>
        {/* <img src={cover} alt={title} /> */}
        <p className="max-md:hidden">{value.title}</p>
      </li>
      )}
  </ul>
); 