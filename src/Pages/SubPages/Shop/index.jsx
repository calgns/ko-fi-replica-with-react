import { useState } from "react";
import { memo, useCallback, useMemo } from "react";
import { ShopMerch } from "../../../Components/shop-items";
import { shopItems } from "../../../data";
import "./style.css";


// PROCURAR MAIS SOBRE CACHE PARA MELHORAR O CODIGO
export const Shop = memo(()=>{
  const [data, setData] = useState(shopItems)
  const catArr = ['All', "Animal", "People", "Nature","Tech", "Arch"]
  
  // esse foi o unico jeito que consegui fazer, sem usar addEventListener que é dito como errado.
  function handleClick(x){
    let catBtn = [...document.querySelectorAll('button.shop-btn')];
    for(let i=0; i<catArr.length; i++){
      catBtn[i].innerText = catArr[i];
      console.log(
        catBtn[i].innerText
        , "useEffect"
      );
    }

    const catPrevText = x.target.innerText;
    x.target.innerText = ("⚡"+x.target.innerText);
    
    catBtn.forEach(c=>{c.classList.remove("shop-btn-active");});
    x.target.classList.add("shop-btn-active") 
    
    console.log(x.target.innerText);

    // não vi diferença, apenas que é maior
    // x.nativeEvent.originalTarget.classList.add("shop-btn-active")
  }
  
  const memorizedMerch = useMemo(()=> <ShopMerch dataValues={data}/>, [data])
  
  const filteredResult = useCallback((catItem) => {
    const result = shopItems.filter(curData=> curData.category == catItem.toLowerCase())
    setData(result);
  })


  return(
    <section className="w-full ">
      <div className="scroll overflow-x-auto overflow-y-hidden">
        <div className="category flex wfc mx-auto lg:max-w-5xl lg:px-4 mt-10 pb-6">
          <button onClick={(x)=>{setData(shopItems); handleClick(x);}} className="shop-btn shop-btn-active ml-3 font-bold rounded-full w-14 h-8">⚡All</button>
          <button onClick={x=>{filteredResult("aNiMals"); handleClick(x);}} className="shop-btn ml-3 font-bold rounded-full px-4 py-1 w-28 h-8">Animal</button>
          <button onClick={x=>{filteredResult("PeoPle"); handleClick(x);}} className="shop-btn ml-3 font-bold rounded-full px-4 py-1 w-28 h-8 ">People</button>
          <button onClick={x=>{filteredResult("nAtuRe"); handleClick(x);}} className="shop-btn ml-3 font-bold rounded-full px-4 py-1 w-28 h-8 ">Nature</button>
          <button onClick={x=>{filteredResult("teCh"); handleClick(x);}} className="shop-btn ml-3 font-bold rounded-full px-4 py-1 w-28 h-8 ">Tech</button>
          <button onClick={x=>{filteredResult("aRcH"); handleClick(x);}} className="shop-btn ml-3 font-bold rounded-full px-4 py-1 w-28 h-8 ">Arch</button>
        </div>
      </div>

    {memorizedMerch}

    </section>)
})