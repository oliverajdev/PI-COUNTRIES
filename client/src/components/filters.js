import React from "react";
import { connect } from "react-redux";
import { FilterAndOrder,  getAllCountries } from "../redux/actions/actions";
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

                <li onClick={() => props.FilterAndOrder(null,'South America')} >South America</li>
                <li onClick={() => props.FilterAndOrder(null,'North America')} >North America</li>
                <li onClick={() => props.FilterAndOrder(null,'Africa')} >Africa</li>
                <li onClick={() => props.FilterAndOrder(null, 'Asia')} >Asia </li>
                <li onClick={() => props.FilterAndOrder(null, 'Europe')} >Europe</li>
                <li onClick={() => props.FilterAndOrder(null, 'Oceania')} >Oceania</li>
                <li onClick={() => props.FilterAndOrder(null, 'Antarctica')} >Antarctica</li>
            </ul>
            <h4 className={s.title}>By Activities</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAndOrder('Recreation')} >Recreation</li>
               <li onClick={() => props.FilterAndOrder('Cultural')} >Cultural</li>
               <li onClick={() => props.FilterAndOrder('Deportivo')} >Deportivo</li>
               <li onClick={() => props.FilterAndOrder('Natural')} >Natural</li>
               <li onClick={() => props.FilterAndOrder('Health')} >Health</li>
            </ul>
            <h4 className={s.title}>By Alphabetical order</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAndOrder('asc')}>ascedent </li>
               <li onClick={() => props.FilterAndOrder('desc')}>desendent</li>
            </ul>
            <h4 className={s.title}>By population</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.FilterAndOrder('popasc')} >ascedent</li>
               <li onClick={() => props.FilterAndOrder('popdesc')} >desendent</li>
            </ul>
          </div>
        </div>
    )
}



export const mapDispatchToProps = function(dispatch){
    return {
        FilterAndOrder: (value,cont) => dispatch(FilterAndOrder(value,cont)),
        getAllCountries: () => dispatch(getAllCountries())
  
         }
  
  };
  
  export default connect(null,mapDispatchToProps)(Filters)