import React from "react";
import s from "../styles/activities.module.css"

export default function Activities(props) {
    return (
        
        <div className={s.container}>
           
           <div className={s.info}>
            <h5 className={s.title}>{props.name}</h5>
            <p>Difficulty: {props.difficulty}</p>
            <p>Duration: {props.duration}hs.</p>
            <p>Season:{props.season}</p>
           </div>
        </div>
    )
}