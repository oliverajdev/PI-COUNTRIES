import React from "react";
import { connect } from "react-redux";
import { FilterAndOrder, FilterByContinent, FilterCountries } from "../redux/actions/actions";
import s from "../styles/filters.module.css"



export function Filters(props) {
    return(
        <div>
            <h4>By continent</h4>
            <ul className={s.ul_list}>
                {console.log(props)}
                <li onClick={() => props.FilterAndOrder(null,'South America')} >South America</li>
                <li onClick={() => props.FilterAndOrder(null,'North America')} >North America</li>
                <li onClick={() => props.FilterAndOrder(null,'Africa')} >Africa</li>
                <li onClick={() => props.FilterAndOrder(null, 'Asia')} >Asia </li>
                <li onClick={() => props.FilterAndOrder(null, 'Europe')} >Europe</li>
                <li onClick={() => props.FilterAndOrder(null, 'Oceania')} >Oceania</li>
                <li onClick={() => props.FilterAndOrder(null, 'Antarctica')} >Antarctica</li>
            </ul>
            <h4>By Activities</h4>
            <ul className={s.ul_list}>
               <li>ascedent</li>
               <li>desendent</li>
            </ul>
            <h4>By Alphabetical order</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAndOrder('asc')}>ascedent </li>
               <li onClick={() => props.FilterAndOrder('desc')}>desendent</li>
            </ul>
            <h4>By population</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAndOrder('popasc')} >ascedent</li>
               <li onClick={() => props.FilterAndOrder('popdesc')} >desendent</li>
            </ul>
        </div>
    )
}



export const mapDispatchToProps = function(dispatch){
    return {
        FilterAndOrder: (value,cont) => dispatch(FilterAndOrder(value,cont)),
  
         }
  
  };
  
  export default connect(null,mapDispatchToProps)(Filters)
