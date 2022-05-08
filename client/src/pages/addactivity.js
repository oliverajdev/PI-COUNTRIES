import React from "react";
import { FilterAndOrder } from "../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react"
import { useState } from "react";
import s from "../styles/addactivity.module.css"

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

      if(!/[a-zA-Z ]{1,60}/.test(input) && input !== '') setError('Solo debe contener letras')
      else setError('')
            
      setInputActivities({...inputsActivities, name: input})

}
const ValidatorDuration = (input) => {
  if(!/[0-9]/.test(input) && input !== '') setError('Solo acepta valores numericos')
  else if(input > 24) setError('No debe exeder las 24 hs')
  else setError('')


setInputActivities({...inputsActivities, duration: input})

}


const DeleteCountry = (input) =>{

    setCountry('')
  
    const index = bodyCountries.findIndex( e => e === input)
 
    setBodyCountries(bodyCountries.filter(e => e !== input))
    setInputActivities({...inputsActivities,countries: inputsActivities.countries.filter((e,i) => i !== index)})


}


    const PostActivity = (e) => {
      
      if(error && error !== 'Faltan Rellenar campos') {
          e.preventDefault()
          return
      }

      
      if(!(inputsActivities.difficulty === '' || inputsActivities.duration === '' || inputsActivities.season === '' || inputsActivities.countries.length === 0)){
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
        e.preventDefault()
        setError('Faltan Rellenar campos')
    } 
    
    }

    useEffect(() => {
        if(country){
         const FindCountry = props.countries.find(e=> e.code === country )
         setBodyCountries([...bodyCountries,FindCountry.name])
        }
         
     },[inputsActivities.countries])


    return(
        <div className={s.container}>
            <form className={s.form}>
               {!error ? null : <span>{error}</span>}
              <div className={s.conteiner_input}>
              <h6 className={s.title}>Name</h6>
              <input 
                className={`${s.input} ${s.inputtext}`}
                name='name' 
                value={inputsActivities.name} 
                onChange={(e) => ValidatorName(e.target.value)} 
                placeholder='Name'> 
                </input>
              </div>

              <div className={s.conteiner_input}>
              <h6 className={s.title}>Duration</h6>  
                <input 
                className={`${s.input} ${s.inputtext}`}
                name='duration' 
                value={inputsActivities.duration} 
                onChange={(e) => ValidatorDuration(e.target.value)} 
                placeholder='Duration'>   
                </input>
                </div>

              <div className={s.conteiner_input}>
              <label className={s.title} for='seasons'>Type</label>
                    <select 
                    className={s.select}
                    name='seasons' 
                    onChange={(e) => setInputActivities({...inputsActivities,types: e.target.value})}
                    >
                        <option disabled selected>Select an option</option>
                        {types.map(e => <option value={e}>{e}</option>)}

                    </select>
              </div>

              <div className={s.conteiner_input}>
              <label  className={s.title} for='dififculty'>Difficulty</label>
                    <select 
                    className={s.select}
                    name='difficulty' 
                    onChange={(e) => setInputActivities({...inputsActivities,difficulty: e.target.value})}
                    >
                        <option disabled selected>Select an option</option>
                        {difficulty.map(e => <option value={e}>{e}</option>)}

                    </select>
              </div>
                
               

               <div className={s.conteiner_input}>
               <label className={s.title} for='seasons'>Seasons</label>
                    <select 
                    className={s.select}
                    name='seasons' 
                    onChange={(e) => setInputActivities({...inputsActivities,season: e.target.value})}
                    >
                        <option disabled selected>Select an option</option>
                        {seasons.map(e => <option value={e}>{e}</option>)}

                    </select>
               </div>
                

                
               <div className={s.conteiner_input}>
               <label className={s.title} for='countries'>Paises</label>
                <select
                className={s.select}
                name='countries' 
                onChange={(e) =>{setCountry(e.target.value)}}
                >
                <option disabled selected>Select an option</option>
                    {props.countries.map(e => <option value={e.code}  >{e.name}</option>)}
                </select>
               
                <button 
                 
                className={`${s.input} ${s.button}`}
                onClick={(e) => { 
                    e.preventDefault()
                    if(!inputsActivities.countries.includes(country)){
                        setInputActivities({...inputsActivities,countries:[...inputsActivities.countries,country]})
                    }
                } 
                }>Add Country</button>
                  
              
               </div>

               <div className={s.conteiner_input}>
               <button className={s.button} type="submit" onClick={(e) => PostActivity(e)}>Create Activity</button>
               </div>
             
            </form>

            <div className={s.countries}>
                   {bodyCountries.map(e => <span  className={s.span}>{e} <button value={e} onClick={(e) => DeleteCountry(e.target.value)} className={s.button_span}>x</button></span> )}
            </div>

           
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