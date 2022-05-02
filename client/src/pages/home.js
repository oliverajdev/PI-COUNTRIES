import React from "react";
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import Cards from "../components/cards"
import { useEffect } from "react"
import { getPagCountries, NextPage, PrevPage, getAllCountries } from "../redux/actions/actions";
import { Buttons } from "../components/buttons";
import SearchBar from "../components/searchbar";
import s from "../styles/home.module.css"
import  Filters  from "../components/filters";


export  function Home(props){

    useEffect(() => {
        props.getAllCountries()      
    },[])


  const HandlerNext = () => {
        props.NextPage()  
    }
   const HandlerPrev = () => {
        props.PrevPage()
    }
    useEffect(() => {
    
        props.getPagCountries(props.currentPag)

    },[props.currentPag])


    

     
    return(
       <div>
          
           <SearchBar/>

           <div className={s.filters}>
               <Filters/>
           </div>

           <Buttons HandlerNext={HandlerNext} HandlerPrev={HandlerPrev}/>
           <div className={s.cards}>
               
           {props.countries.map(
               e => (
                   <Cards
                   name = {e.name}
                   img = {e.image}
                   continent = {e.continent}
                   code = {e.code}
                   />
               )
           )}

           </div>
 
       </div>
    )
}


export const mapStateToProps = function(state){
    return {
        countries: state.paginateCountries,
        currentPag: state.currentPag,
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        getPagCountries: (pag) => dispatch(getPagCountries(pag)),
        getAllCountries: () => dispatch(getAllCountries()),
        NextPage: () => dispatch(NextPage()),
        PrevPage: () => dispatch(PrevPage())
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);