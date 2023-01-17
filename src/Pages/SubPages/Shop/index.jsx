import { useState } from "react";
import { memo, useCallback, useMemo } from "react/cjs/react.development";
import { ShopMerch } from "../../../Components/shop-items";
import { shopItems } from "../../../data";
import "./style.css";


// PROCURAR MAIS SOBRE CACHE PARA MELHORAR O CODIGO
export const Shop = memo(()=>{
  const [data, setData] = useState(shopItems)

  const memorizedMerch = useMemo(()=> <ShopMerch dataValues={data}/>, [data])
  const filteredResult = useCallback((catItem) => {
    const result = shopItems.filter(curData=> curData.category == catItem.toLowerCase())
    console.log(result);
    setData(result);
  }, [])


  return(
    <section className="w-full ">
      <div className="scroll overflow-x-auto overflow-y-hidden">
        <div className="cat flex wfc mx-auto lg:max-w-5xl lg:px-4 mt-10 mb">
          <button onClick={()=>setData(shopItems)} className="bg-slate-700 bg-opacity-50 border border-solid border-amber-600 border-opacity-50 shop-active ml-3 font-bold rounded-full w-14 h-8">All</button>
          <button onClick={()=>filteredResult("aNiMals")} className="bg-slate-700 bg-opacity-50 border border-solid border-amber-600 border-opacity-50 ml-3 font-bold rounded-full px-4 py-1 w-32 h-8">Animal</button>
          <button onClick={()=>filteredResult("PeoPle")} className="bg-slate-700 bg-opacity-50 border border-solid border-amber-600 border-opacity-50 ml-3 font-bold rounded-full px-4 py-1 w-32 h-8 ">People</button>
          <button onClick={()=>filteredResult("nAtuRe")} className="bg-slate-700 bg-opacity-50 border border-solid border-amber-600 border-opacity-50 ml-3 font-bold rounded-full px-4 py-1 w-32 h-8 ">Nature</button>
          <button onClick={()=>filteredResult("teCh")} className="bg-slate-700 bg-opacity-50 border border-solid border-amber-600 border-opacity-50 ml-3 font-bold rounded-full px-4 py-1 w-32 h-8 ">Tech</button>
          <button onClick={()=>filteredResult("aRcH")} className="bg-slate-700 bg-opacity-50 border border-solid border-amber-600 border-opacity-50 ml-3 font-bold rounded-full px-4 py-1 w-32 h-8 ">Arch</button>
        </div>
      </div>

    {memorizedMerch}

    </section>)
})