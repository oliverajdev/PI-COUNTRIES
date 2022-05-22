import React from "react";
import { connect } from "react-redux";
import Cards from "../components/cards";
import { removeFavorite } from "../redux/actions/actions";


export function Favorites(props) {
    return(
        <div style={{margin: '100px 0 0 0',color:'white'}}>
              {props.favorite.length > 0 ? props.favorite.map(
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
           ): <span>No se encontraron resultados</span>}
        </div>
    )
}


export const mapStateToProps = function (state) {
    return {
        favorite: state.favorite
    }

}

export const mapDispatchToProps = function (dispatch) {
    return {
        removeFavorite: (code) => dispatch(removeFavorite(code))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)