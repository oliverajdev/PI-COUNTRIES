import React from "react";
import s from "../styles/buttons.module.css"


export function Buttons({HandlerPrev,HandlerNext}){
    return(
        <div className={s.container}>
        <button className={s.button} onClick={() => HandlerPrev()} >Prev</button>
        <button className={s.button} onClick={() => HandlerNext()}>Next</button>
        </div>
    )
}