import React from "react";
import { NavLink } from "react-router-dom";
import s from "../styles/cards.module.css"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";
import { useState } from "react";



export default function Cards(props){
   

    const [isFavorite, setIsFavorite] = useState(false)

   const  HandlerFavorite = (code) => {
   if(!isFavorite){
       
       return props.addFavorite(code)
   }
   props.removeFavorite(code)

    }

    useEffect(() => {
       if(props.favorite.find(e => e.code === props.code)) setIsFavorite(true)
       else setIsFavorite(false)
        
    }, [props.favorite]);

    

    return(
        <div className={s.cards}>
            
            
            <h3 className={s.name}>{props.name}</h3>
            <img className={s.img} src={props.img} alt='img'/>
            <p className={s.cont}>{props.continent}</p>
            <div className={isFavorite ? s.f_star : s.c_star } onClick={() => HandlerFavorite(props.code)}><FontAwesomeIcon  icon={faStar}  /></div>
            <NavLink className={s.link} to={`/detail/${props.code}`}>Detail</NavLink>
            
        </div>
    )
}