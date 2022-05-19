import React from "react";
import { connect } from "react-redux";
import {  getUrl, setPage } from "../redux/actions/actions";
import s from "../styles/filters.module.css"
import { useEffect } from "react";



export function Filters(props) {

  useEffect(() => {
    if(props.page === 0) props.setPage(-props.current)
  }, [props.page]);
    return(
        <div className={s.container}>
          <div>
          <h4 className={s.title} >Get all</h4>
          <ul className={s.ul_list}>
            <li onClick={() => props.getUrl()}>all</li>
          </ul>
          <h4 className={s.title}>By continent</h4>
            <ul className={s.ul_list}>

                <li onClick={() => props.getUrl('continent,South America')} >South America</li>
                <li onClick={() => props.getUrl('continent,North America')} >North America</li>
                <li onClick={() => props.getUrl('continent,Africa')} >Africa</li>
                <li onClick={() => props.getUrl( 'continent,Asia')} >Asia </li>
                <li onClick={() => props.getUrl( 'continent,Europe')} >Europe</li>
                <li onClick={() => props.getUrl( 'continent,Oceania')} >Oceania</li>
                <li onClick={() => props.getUrl( 'continent,Antarctica')} >Antarctica</li>
            </ul>
            <h4 className={s.title}>By Activities</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.getUrl( 'Tourism,Recreation')} >Recreation</li>
               <li onClick={() => props.getUrl( 'Tourism,Cultural')} >Cultural</li>
               <li onClick={() => props.getUrl( 'Tourism,Deportivo')} >Deportivo</li>
               <li onClick={() => props.getUrl( 'Tourism,Natural')} >Natural</li>
               <li onClick={() => props.getUrl( 'Tourism,Health')} >Health</li>
            </ul>
            <h4 className={s.title}>By Alphabetical order</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.getUrl(props.continent,'name,ASC',)}>ascedent </li>
               <li onClick={() => props.getUrl(props.continent,'name,DESC')}>desendent</li>
            </ul>
            <h4 className={s.title}>By population</h4>
            <ul className={s.ul_list}>
               <li onClick={() => props.getUrl(props.continent,'population,ASC')} >ascedent</li>
               <li onClick={() => props.getUrl(props.continent,'population,DESC')} >desendent</li>
            </ul>
          </div>
        </div>
    )
}

export const mapStateToProps = function(state){
  return {

      continent: state.continent,
      page: state.page,
      size: state.size,
      current: state.current
  }
};


export const mapDispatchToProps = function(dispatch){
    return {
        getUrl: (orderq,filterq) => dispatch(getUrl(null,orderq,filterq)),
        setPage: (current) => dispatch(setPage(current))
  
         }
  
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Filters)
