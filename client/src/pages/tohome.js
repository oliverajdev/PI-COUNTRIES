import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/tohome.module.css'
import image from '../images/tohome.svg'

export default function ToHome(){
    return (
        <div>

            <div className={s.container_img}>
                <img src={image} className={s.img} alt='main-img'/>
                <div className={s.link}><Link to='/home'>To Home</Link></div>
            </div>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente doloribus aut reiciendis ullam libero ipsa, possimus beatae quis sint dolorem fuga alias, ipsam nemo porro aliquid commodi ipsum corporis culpa distinctio dolor architecto fugiat! Eum cum laboriosam exercitationem nemo fugiat quam dolorem, magnam debitis minima, reprehenderit optio? Corporis, expedita at!</p>
            </div>


        </div>
    ) 
};