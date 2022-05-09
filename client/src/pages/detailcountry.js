import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { CountryDetail } from "../redux/actions/actions";
import { useEffect } from "react";
import  Activities  from "../components/activities";
import s from "../styles/detailcountry.module.css"

export function DetailCountry(props) {

    const {code} = useParams();
    
    useEffect(() => {
        props.CountryDetail(code)
      
    }, []);


    return(
       
        <div className={s.cont}>
            
            <div className={s.container_img}>
            <img src={props.country.image}/>
            </div>
            <div className={s.container_info}>
            <h3 className={s.name}>{props.country.name}</h3>
            <h4 className={s.continent}>{props.country.continent}</h4>
            <p>Capital:  {props.country.capital}</p>
            <p>Code:  {props.country.code}</p>
            
            
            <p>Sub Region:  {props.country.subRegion}</p>
            <p>Area:  {props.country.area} km2</p>
            <p>Population:  {props.country.population} </p>
            </div>
            
           
            <h3 className={s.activities}>Activities</h3>
            {props.country.tourisms?.map(
            e => 
           (
             <Activities 
            name={e.name}
            type={e.types} 
            difficulty={e.difficulty} 
            duration={e.duration} 
            season={e.season} 
            />
            )
            )
            }

            
        </div>
    )
}


export const mapStateToProps = function(state){
    return {
        country: state.country
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        CountryDetail: (code) => dispatch(CountryDetail(code)),
       
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCountry);