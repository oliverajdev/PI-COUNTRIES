import React from "react";


export function Buttons({HandlerPrev,HandlerNext}){
    return(
        <div>
        <button onClick={() => HandlerPrev()} >Prev</button>
        <button onClick={() => HandlerNext()}>Next</button>
        </div>
    )
}