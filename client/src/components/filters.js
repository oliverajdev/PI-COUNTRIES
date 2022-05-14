import React from "react";
import { connect } from "react-redux";
import { Order,  getAllCountries, FilterAsc, FilterDesc } from "../redux/actions/actions";
import s from "../styles/filters.module.css"



export function Filters(props) {
    return(
        <div className={s.container}>
          <div>
          <h4 className={s.title} >Get all</h4>
          <ul className={s.ul_list}>
            <li onClick={() => props.getAllCountries()}>all</li>
          </ul>
          <h4 className={s.title}>By continent</h4>
            <ul className={s.ul_list}>

                <li onClick={() => props.Order(null,'South America')} >South America</li>
                <li onClick={() => props.Order(null,'North America')} >North America</li>
                <li onClick={() => props.Order(null,'Africa')} >Africa</li>
                <li onClick={() => props.Order(null, 'Asia')} >Asia </li>
                <li onClick={() => props.Order(null, 'Europe')} >Europe</li>
                <li onClick={() => props.Order(null, 'Oceania')} >Oceania</li>
                <li onClick={() => props.Order(null, 'Antarctica')} >Antarctica</li>
            </ul>
            <h4 className={s.title}>By Activities</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.Order('Recreation')} >Recreation</li>
               <li onClick={() => props.Order('Cultural')} >Cultural</li>
               <li onClick={() => props.Order('Deportivo')} >Deportivo</li>
               <li onClick={() => props.Order('Natural')} >Natural</li>
               <li onClick={() => props.Order('Health')} >Health</li>
            </ul>
            <h4 className={s.title}>By Alphabetical order</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAsc('name')}>ascedent </li>
               <li onClick={() => props.FilterDesc('name')}>desendent</li>
            </ul>
            <h4 className={s.title}>By population</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAsc('population')} >ascedent</li>
               <li onClick={() => props.FilterDesc('population')} >desendent</li>
            </ul>
          </div>
        </div>
    )
}



export const mapDispatchToProps = function(dispatch){
    return {
        Order: (value,cont) => dispatch(Order(value,cont)),
        FilterAsc: (payload) => dispatch(FilterAsc(payload)),
        FilterDesc: (payload) => dispatch(FilterDesc(payload)),
        getAllCountries: () => dispatch(getAllCountries())
  
         }
  
  };
  
  export default connect(null,mapDispatchToProps)(Filters)
