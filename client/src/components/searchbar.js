import React, { useState } from "react";
import { connect } from "react-redux";
import { FilterCountries } from "../redux/actions/actions";
import s from "../styles/searchbar.module.css"

export function SearchBar(props) {
    const [country,setCountry] = useState("");
  return (
    <form className={s.form} onSubmit={(e) => {
      e.preventDefault();
      props.FilterCountries(country);
      setCountry("")
    }}>
      <input
        className={s.input}
        type="text"
        placeholder="Country..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input 
      className={s.button}  
      type="submit" 
      value="Search"
      />
    
    </form>
    
    
  );
}



export const mapDispatchToProps = function(dispatch){
  return {
      FilterCountries: (name) => dispatch(FilterCountries(name)),

       }

};

export default connect(null,mapDispatchToProps)(SearchBar);