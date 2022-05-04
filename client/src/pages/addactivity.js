import React from "react";
import { FilterAndOrder } from "../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react"
import { useState } from "react";

export function AddActivity(props) {

    const seasons = ['Winter','Spring','Summer','Outumn'];
    const types = ['Recreation','Cultural','Deportivo','Natural','Health'];
    const difficulty = [1,2,3,4,5]

    useEffect(() => {
        props.FilterAndOrder('asc')  
    },[])

    const [error, setError] = useState('');
    const [country, setCountry] = useState('')
    const [bodyCountries, setBodyCountries] = useState([])
    const [inputsActivities, setInputActivities] = useState({
        name: '',
        types:'',
        difficulty: '',
        duration: '',
        season:'',
        countries: []
    })


    const ValidatorName = (input) => {
        if(input){
            if(!/[a-zA-Z ]{2,254}/g.test(input)) setError('Solo debe contener A-Z')
            else setError('')
            setInputActivities({...inputsActivities, name: input})

   
    }

}
const ValidatorDuration = (input) => {
    if(input){
  if(typeof input !== 'number') setError('Deben ser numeros')
  if(input > 24) setError('No debe exeder las 24 hs')
  else setError('')
  setInputActivities({...inputsActivities, duration: input})
      
  

}

}


    const PostActivity = () => {
      if(!error){
        fetch('http://localhost:3001/activity', {
            method: 'POST',
            body: JSON.stringify(inputsActivities), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
      }else{

      }
    }

    useEffect(() => {
        if(country){
         const FindCountry = props.countries.find(e=> e.code === country )
         setBodyCountries([...bodyCountries,FindCountry.name])
        }
         
     },[inputsActivities.countries])


    return(
        <div>
            <form>

                <input 
                name='name' 
                value={inputsActivities.name} 
                onChange={(e) => ValidatorName(e.target.value)} 
                placeholder='name'> 
                </input>

                <label for='seasons'>Seasons</label>
                    <select name='seasons' onChange={(e) => setInputActivities({...inputsActivities,types: e.target.value})}>
                        <option disabled selected>Select an option</option>
                        {types.map(e => <option value={e}>{e}</option>)}

                    </select>

                <label for='dififculty'>Difficulty</label>
                    <select name='difficulty' onChange={(e) => setInputActivities({...inputsActivities,difficulty: e.target.value})}>
                        <option disabled selected>Select an option</option>
                        {difficulty.map(e => <option value={e}>{e}</option>)}

                    </select>
        
                <input 
                name='duration' 
                value={inputsActivities.duration} 
                onChange={(e) => ValidatorDuration(e.target.value)} 
                placeholder='duration'>   
                </input>

                <label for='seasons'>Seasons</label>
                    <select name='seasons' onChange={(e) => setInputActivities({...inputsActivities,season: e.target.value})}>
                        <option disabled selected>Select an option</option>
                        {seasons.map(e => <option value={e}>{e}</option>)}

                    </select>
                

                
                <label for='countries'>Paises</label>
                <select  name='countries' onChange={(e) =>{setCountry(e.target.value)}}>
                <option disabled selected>Select an option</option>
                    {props.countries.map(e => <option value={e.code}  >{e.name}</option>)}
                </select>
                <button  onClick={(e) => { 
                    e.preventDefault()
                    setInputActivities({...inputsActivities,countries:[...inputsActivities.countries,country]})
                } 
                }>Add Country</button>
               
              
                <button type="submit" onClick={() => PostActivity()}>Send</button>
            </form>
            {bodyCountries}
         
        </div>
    )
}


export const mapStateToProps = function(state){
    return {
        countries: state.countries
    }
};

export const mapDispatchToProps = function(dispatch){
    return {
        FilterAndOrder: (value) => dispatch(FilterAndOrder(value)),
         }

};

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity);