import React, { useState } from "react";
import { connect } from "react-redux";
import { getUrl } from "../redux/actions/actions";
import s from "../styles/searchbar.module.css"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SearchBar(props) {
    const [country,setCountry] = useState("");
  return (
    <form className={s.form} onSubmit={(e) => {

      
      props.getUrl(country,props.continent,props.filter);
      e.preventDefault();
      setCountry("")
    }}>
      <input
        className={s.input}
        type="text"
        placeholder="Country..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
     <button className={s.button} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
   
     </form>
    
    
  );
}


export const mapStateToProps = function(state){
  return {

      continent: state.continent,
      filter: state.filter,
  }
};


export const mapDispatchToProps = function(dispatch){
  return {
      getUrl: (search,orderq,filterq) => dispatch(getUrl(search,orderq,filterq)),
       }

};

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);