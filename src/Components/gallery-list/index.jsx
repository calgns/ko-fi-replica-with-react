import { GalleryItem } from "../gallery-item";
import "./style.css";

export const GalleryList = ({values})=>(
  <ul className="w-full max-md:gap-2 mx-auto justify-center items-center grid gap-4 mt-10 ">
    {values.map(value=> <GalleryItem title={value.title} cover={value.cover} key={value.k}/> )}
  </ul>
); 