import React from "react";
// import { Link } from "react-router-dom";
import s from "../styles/navbar.module.css"


export default function Nav(){
    return (
        <div className={s.navbar}>
            <div>
            <ul className={s.ul_list}>
                <li>Home</li>
                <li>Activity</li>
                <li>Add activity</li>
            </ul>
            </div>
    
        </div>
    ) 
}