import { ShopItem } from "../shop-item";
import "./style.css"

export const ShopMerch = ({dataValues}) =>(
  <div className="cato flex flex-wrap justify-center items-center gap-4 w-9/12 mx-auto mt-3 ">
    {dataValues.map(
      value=>
        <ShopItem 
          type={value.type} 
          price={value.price} 
          customColor={value.color} 
          title={value.title} 
          details={value.details} 
          key={value.color+value.type+value.price} />)}
  </div>
)