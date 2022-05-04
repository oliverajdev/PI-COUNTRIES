import React from "react";
import { Link } from "react-router-dom";
import s from "../styles/navbar.module.css"



export default function Nav(){
   
    return (
        <div className={s.navbar}>
            <div>
            <ul className={s.ul_list}>
                <li><Link to='/home'>Home</Link></li>
                <li>Activity</li>
                <li><Link to='/addactivity'>Add Activity</Link></li>
            </ul>
            </div>
    
        </div>
    ) 
}