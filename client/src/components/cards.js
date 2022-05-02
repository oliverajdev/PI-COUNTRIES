import React from "react";
import { Link } from "react-router-dom";
import s from "../styles/cards.module.css"


export default function Cards(props){
    return(
        <div className={s.cards}>
            <h3>{props.name}</h3>
            <img className={s.img} src={props.img} alt='img'/>
            <p>{props.continent}</p>
            <Link to={`/detail/${props.code}`}>Detail</Link>
        </div>
    )
}