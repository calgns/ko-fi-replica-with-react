import "./style.css";

export const GalleryItem = ({title, cover})=>(
  <li id="gli">
    <div className="gallery-item bg-no-repeat bg-cover bg-center rounded-2xl " style={{backgroundImage: "url("+cover+')'}}></div>
    {/* <img src={cover} alt={title} /> */}
    <p className="max-md:hidden">{title}</p>
  </li>
)
