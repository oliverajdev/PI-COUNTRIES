import React from "react";
import { connect } from 'react-redux';
import Cards from "../components/cards"
import { useEffect } from "react"
import { getUrl,addFavorite, removeFavorite } from "../redux/actions/actions";
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

           <Buttons/>
           <div className={s.cards}>
              
           {(props.countries.length > 0 ? props.countries.map(
               e => (
                   <Cards
                   key = {e.code}
                   name = {e.name}
                   img = {e.image}
                   continent = {e.continent}
                   code = {e.code}
                   addFavorite  = {props.addFavorite}
                   removeFavorite = {props.removeFavorite}
                   favorite = {props.favorite}
                   
                   />
               )
           ): <span>No se encontraron resultados</span>)}
            
           </div>

          
 
       </div>
    )
}


export const mapStateToProps = function(state){
    return {

        countries: state.countries,
        page: state.page,
        size: state.size,
        favorite: state.favorite
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        getUrl: (pageq,sizeq) => dispatch(getUrl(null,null,null,pageq,sizeq)),
        addFavorite: (code) => dispatch(addFavorite(code)),
        removeFavorite: (code) => dispatch(removeFavorite(code))
       
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);