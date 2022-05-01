import React from "react";
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import Cards from "../components/cards"
import { useEffect } from "react"
import { getPagCountries, NextPage, PrevPage, FilterCountries } from "../redux/actions/actions";
import { Buttons } from "../components/buttons";
import SearchBar from "../components/searchbar";


export  function Home(props){


    useEffect(() => {
        props.getPagCountries(props.currentPag)    
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

           <Buttons HandlerNext={HandlerNext} HandlerPrev={HandlerPrev}/>

           {props.search}

           
           {props.countries.map(
               e => (
                   <Cards
                   name = {e.name}
                   img = {e.image}
                   continent = {e.continent}
                   />
               )
           )}
           {console.log(props.countries)}


           
       </div>
    )
}


export const mapStateToProps = function(state){
    return {
        countries: state.paginateCountries,
        currentPag: state.currentPag,
        // search: state.search
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        getPagCountries: (pag) => dispatch(getPagCountries(pag)),
        NextPage: () => dispatch(NextPage()),
        PrevPage: () => dispatch(PrevPage())
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);