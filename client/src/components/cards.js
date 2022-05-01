import React from "react";
import s from "../styles/cards.module.css"


export default function Cards(props){
    return(
        <div className={s.cards}>
            <h3>{props.name}</h3>
            <img className={s.img} src={props.img[0]} alt='img'/>
            <p>{props.continent}</p>
        </div>
    )
}