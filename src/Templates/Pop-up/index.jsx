import { useEffect } from 'react';
import { LogIn } from '../../Components/LogIn';
import { SingUp } from '../../Components/SingUp';
import './style.css';

export const PopUp = (props) => {
  let body = document.querySelector("body")
  
  useEffect(()=>{
    var innerPop = document.querySelector("div.popup-inner");
    let handler = (event) => {
      // if(outterPop.contains(event.target)){
        if(!innerPop.contains(event.target)) {props.setTrigger(false); console.log(event, "trigger...", event.target)}
        console.log(!innerPop.contains(event.target));
      // }
    }

    document.addEventListener("mousedown", handler)
    
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  props.trigger ? body.style.overflow = "hidden" : body.style.overflow = "auto";

  return (
    // <div className="popup z-20" onClick={()=>props.setTrigger(false)}>
    <div className={props.trigger ? "popup overflow-x-hidden overflow-y-auto z-20 " : "hidden"}>
      <div className="popup-inner text-white" >
        <button className="close-btn p-4" onClick={()=>props.setTrigger(false)}></button>
          {props.pop == "sing"? <SingUp /> : <LogIn />}
      </div>
    </div>
  );
}
