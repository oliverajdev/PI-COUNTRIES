import React from "react";
import s from "../styles/buttons.module.css"



export function Buttons(props){



    return(
        
        
        <div className={s.container}>
          
            
        <button className={s.button} onClick={() => props.HandlerPrev()} >Prev</button>
      
        <button className={s.button}  onClick={() => props.HandlerNext()}>Next</button>
        </div>
    )
}



