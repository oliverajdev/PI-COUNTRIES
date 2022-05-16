import React from "react";
import { connect } from 'react-redux';
import Cards from "../components/cards"
import { useEffect } from "react"
import { getPagCountries, NextPage, PrevPage, getAllCountries } from "../redux/actions/actions";
import { Buttons } from "../components/buttons";
import SearchBar from "../components/searchbar";
import s from "../styles/home.module.css"
import  Filters  from "../components/filters";





export  function Home(props){

    

    

    useEffect(() => {
       if(props.allCountries.length === 0){
        props.getAllCountries()    
       } 
    
    },[])
    


  const HandlerNext = () => {
   
      if(((props.allCountries.length/10)-1) <= props.currentPag/10) return
        props.NextPage()
    }
   const HandlerPrev = () => {
       if(props.currentPag === 0) return
       props.PrevPage()
    }
    
    useEffect(() => {
       
       if(props.currentPag === 0) props.getPagCountries(props.currentPag,9)
       else props.getPagCountries(props.currentPag,10)
     

    },[props.currentPag])
  


    

     
    return(
       <div className={s.container}>
           
          
           <SearchBar/>

           <div className={s.filters}>
               <Filters/>
           </div>

          
           <div className={s.cards}>
               
           {props.countries.length > 0 ? props.countries.map(
               e => (
                   <Cards
                   key = {e.code}
                   name = {e.name}
                   img = {e.image}
                   continent = {e.continent}
                   code = {e.code}
                   />
               )
           ): <span>No se encontraron resultados</span>}
            
           </div>
           <Buttons  HandlerNext={HandlerNext} HandlerPrev={HandlerPrev}  />
          
 
       </div>
    )
}


export const mapStateToProps = function(state){
    return {
        allCountries: state.countries,
        countries: state.paginateCountries,
        currentPag: state.currentPag,
        search: state.search
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        getPagCountries: (pag,inc) => dispatch(getPagCountries(pag,inc)),
        getAllCountries: () => dispatch(getAllCountries()),
        NextPage: () => dispatch(NextPage()),
        PrevPage: () => dispatch(PrevPage())
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);