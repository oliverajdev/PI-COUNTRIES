import React from "react";
import { NavLink } from "react-router-dom";
import s from "../styles/list.module.css"




export default function List(props) {
    return(
        <div>
            
            <div className={s.container}>
            <button className={s.button} onClick={() => props.deleteActivity(props.id)}>Delete</button>
         <NavLink className={s.link} to={`update/${props.id}`}>Update</NavLink>
            <h4 className={s.title}>{props.name}      </h4>
         
         <p className={s.p}>Type: {props.type}</p>
         <p className={s.p}>Difficulty: {props.difficulty}</p>
         <p className={s.p}>Duration: {props.duration}</p>
         <p className={s.p}>Season: {props.season}</p>
       {console.log(props)}
         <ul className={s.ul}>
         {props.countries.map(e => (
             <li>
                  <img className={s.img} src={e.image} alt='img'/>
             </li>
         ))}
         </ul>
        
            </div>

        </div>
    )
        
            
        
    

}