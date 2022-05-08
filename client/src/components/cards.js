import React from "react";
import { NavLink } from "react-router-dom";
import s from "../styles/cards.module.css"


export default function Cards(props){
    return(
        <div className={s.cards}>
            <h3 className={s.name}>{props.name}</h3>
            <img className={s.img} src={props.img} alt='img'/>
            <p className={s.cont}>{props.continent}</p>
            <NavLink className={s.link} to={`/detail/${props.code}`}>Detail</NavLink>
        </div>
    )
}