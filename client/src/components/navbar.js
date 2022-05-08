import React from "react";
import { NavLink } from "react-router-dom";
import s from "../styles/navbar.module.css"



export default function Nav(){
   
    return (
        <div className={s.navbar}>
        <div className={s.container}>
            <ul className={s.ul_list}>
                <li><NavLink className={(navData) => navData.isActive ? s.activelink : s.link }  to='/home'>Home</NavLink></li>
                <li><NavLink className={(navData) => navData.isActive ? s.activelink : s.link } to='/home'>Activity</NavLink></li>
                <li><NavLink className={(navData) => navData.isActive ? s.activelink : s.link } to='/addactivity'>Add Activity</NavLink></li>
            </ul>
        </div>
    
        </div>
    ) 
}