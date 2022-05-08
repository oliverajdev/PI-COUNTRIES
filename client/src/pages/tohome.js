import React from 'react';
import s from '../styles/tohome.module.css';
import image from '../images/tohome.svg';

export default function ToHome(){
    return (
        <div className={s.container}>

            <div className={s.container_img}>
                <img src={image} className={s.img} alt='main-img'/>
            </div>
            <div>
            <p className={s.pres}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente doloribus aut reiciendis ullam libero ipsa, possimus beatae quis sint dolorem fuga alias, ipsam nemo porro aliquid commodi ipsum corporis culpa distinctio dolor architecto fugiat! Eum cum laboriosam exercitationem nemo fugiat quam dolorem, magnam debitis minima, reprehenderit optio? Corporis, expedita at!</p>
            </div>


        </div>
    ) 
};