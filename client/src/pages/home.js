import React from "react";
import { connect } from 'react-redux';
import Cards from "../components/cards"
import { useEffect } from "react"
import { getUrl } from "../redux/actions/actions";
import  Buttons  from "../components/buttons";
import SearchBar from "../components/searchbar";
import s from "../styles/home.module.css"
import  Filters  from "../components/filters";





export  function Home(props){

    

    

    useEffect(() => {
        props.getUrl(0,9)    
    
    },[])

  


    

     
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
           <Buttons/>
          
 
       </div>
    )
}


export const mapStateToProps = function(state){
    return {

        countries: state.countries,
        page: state.page,
        size: state.size
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        getUrl: (pageq,sizeq) => dispatch(getUrl(null,null,null,pageq,sizeq)),
       
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);