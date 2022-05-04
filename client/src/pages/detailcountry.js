import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { CountryDetail } from "../redux/actions/actions";
import { useEffect } from "react";
import  Activities  from "../components/activities";

export function DetailCountry(props) {

    const {code} = useParams();
    
    useEffect(() => {
        props.CountryDetail(code)
      
    }, []);


    return(
       
        <div>
            <h3>{props.country.name}</h3>
            <h5>{props.country.code}</h5>
            <img src={props.country.image}/>
            <p>{props.country.continent}</p>
            <p>{props.country.capital}</p>
            <p>{props.country.subRegion}</p>
            <p>{props.country.area}</p>
            <p>{props.country.population} </p>
            
           

            {props.country.tourisms?.map(
            e => 
           (
             <Activities 
            name={e.name} 
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