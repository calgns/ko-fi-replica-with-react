import "./style.css";

export const ShopItem = ({ type, price, customColor, title, details  }) => (
  <div className="shop-card mt-4">
    <div className="shop-img relative">
      <img className="rounded-t-lg" src={"https://placeimg.com/300/300/" + type } alt="" />

      <div className="flex justify-end w-full absolute right-0 bottom-2 px-3" >
        <span className={customColor+" font-bold text-xl rounded-xl px-2 py-1"}>{price}</span>
      </div>
    </div>

    <div className="shop-detail bg-indigo-900 bg-opacity-20  flex justify-between rounded-b-lg items-start p-4">
      <div className="flex flex-col items-start justify-start capitalize w-full ">
        <span className="text-xl font-bold ">{title}</span>
        <p className="preview-text text-neutral-300">✨ {details}</p>
      </div>
    </div>
  </div>
);