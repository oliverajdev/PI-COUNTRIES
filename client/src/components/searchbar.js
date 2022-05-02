import React, { useState } from "react";
import { connect } from "react-redux";
import { FilterCountries } from "../redux/actions/actions";

export function SearchBar(props) {
    const [country,setCountry] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.FilterCountries(country);
      setCountry("")
    }}>
      <input
        type="text"
        placeholder="Country..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input type="submit" value="Search" />
    
    </form>
    
    
  );
}



export const mapDispatchToProps = function(dispatch){
  return {
      FilterCountries: (name) => dispatch(FilterCountries(name)),

       }

};

export default connect(null,mapDispatchToProps)(SearchBar);