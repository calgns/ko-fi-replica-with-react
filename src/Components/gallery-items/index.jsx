import "./style.css";

export const GalleryItems = ({values})=>(
  <ul className="grid-gallery grid w-full max-md:gap-2 mx-auto justify-center items-center  gap-4 mt-10 ">
    {values.map(value=> 
      <Item
        title={value.title}
        cover={value.cover}
        height={value.height}
        key={value.k}
        />
      )}
  </ul>
); 

const Item = ({height, cover, title}) => {
  const putClass = height >= 300 ? "grid-span-2" : "";

  return(
    <li className={"gli "+putClass}>
      <div className="gallery-item bg-no-repeat bg-cover bg-center rounded-2xl " 
        style={{backgroundImage: "url("+cover+height+')'}}></div>
      {/* <img src={cover} alt={title} /> */}
      <p className="max-md:hidden">{title}</p>
    </li>
  )
}