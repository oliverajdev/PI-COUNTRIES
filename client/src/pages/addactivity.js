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
    
    const [popup, setPopup] = useState('')
 
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

    const [error, setError] = useState({
        errorDuration: '',
        errorName: '',
        errorPost: ''
    });


    const ValidatorName = (input) => {
       if(!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(input) && input !== '') setError({...error, errorName: 'Solamente acepta letras'})
       else setError({...error, errorName: ''})

       setInputActivities({...inputsActivities, name: input})
   }


   const ValidatorDuration = (input) => {
       if((isNaN(input))) setError({...error, errorDuration:'Solo acepta valores numericos'})
       else if (input % 1 !== 0 || input[input.length-1] === '.') setError({...error, errorDuration:'Solo acepta valores enteros'})
       else if(input > 24 || input < 0) setError({...error, errorDuration:'No debe exeder las 24 hs'})
       else setError({...error, errorDuration: ''})

       setInputActivities({...inputsActivities, duration: input})

  }  


  const DeleteCountry = (input) =>{

    const index = bodyCountries.findIndex( e => e === input)
    setBodyCountries(bodyCountries.filter(e => e !== input))
    console.log(bodyCountries.filter(e => e !== input))
    setInputActivities({...inputsActivities,countries: inputsActivities.countries.filter((e,i) => i !== index)})
  
  }


    const PostActivity = (e) => {

        if(inputsActivities.difficulty === '' || inputsActivities.duration === '' || inputsActivities.season === '' || inputsActivities.countries.length === 0){
            e.preventDefault()
            setError({...error,errorPost: 'Faltan rellenar campos'})
        }else{
        setError({...error,errorPost: ''})
        if(error.errorDuration === '' && error.errorName === ''){
            e.preventDefault()
            
        fetch('http://localhost:3001/activity', {
            method: 'POST',
            body: JSON.stringify(inputsActivities), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
          .then((response) =>  {
              
              const ARRAY_RESPONSE =response.filter(e => e !== null)
              if(ARRAY_RESPONSE.length > 0){
                  setPopup(`the following code countries could not be loaded: ${ARRAY_RESPONSE.join(' ')} `)
              }else setPopup('Success')
            })
          .catch(error => console.Error('Error:', error));
        
      
        }else{
           
            e.preventDefault()
            return
        }
            }
    
    }

    return(
        <div className={s.container}>

            {!popup ? null: 
            <div className={s.popup} >
                <p className={s.popup_info}>{popup}</p>
                <button 
                className={s.popup_button} 
                onClick={(e) =>{
                    setPopup('')

                   
            
                }}>x</button>
            </div>}
            
            <form className={s.form}>
               {!error.errorName ? null : <span className={s.error}>{error.errorName}</span>}
               {!error.errorDuration ? null : <span className={s.error}>{error.errorDuration}</span>}
               {!error.errorPost ? null : <span className={s.error}>{error.errorPost}</span>}
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
              <label className={s.title} >Type</label>
                    <select 
                    className={s.select}
                    name='seasons' 
                    onChange={(e) => setInputActivities({...inputsActivities,types: e.target.value})}
                    defaultValue=''
                    >
                        <option disabled value=''>Select an option</option>
                        {types.map(e => <option value={e}>{e}</option>)}

                    </select>
              </div>

              <div className={s.conteiner_input}>
              <label  className={s.title} >Difficulty</label>
                    <select 
                    className={s.select}
                    name='difficulty' 
                    onChange={(e) => setInputActivities({...inputsActivities,difficulty: e.target.value})}
                    defaultValue=''
                    >
                        <option disabled value=''>Select an option</option>
                        {difficulty.map(e => <option value={e}>{e}</option>)}

                    </select>
              </div>
                
               

               <div className={s.conteiner_input}>
               <label className={s.title} >Seasons</label>
                    <select 
                    className={s.select}
                    name='seasons' 
                    onChange={(e) => setInputActivities({...inputsActivities,season: e.target.value})}
                    defaultValue=''
                    >
                        <option disabled value=''>Select an option</option>
                        {seasons.map(e => <option value={e}>{e}</option>)}

                    </select>
               </div>
                

                
               <div className={s.conteiner_input}>
               <label className={s.title} >Paises</label>
                <select
                className={s.select}
                name='countries' 
                onChange={(e) =>{setCountry(e.target.value)}}
                defaultValue=''
                >
                <option value='' >Select an option</option>
                    {props.countries.map(e => <option key={e.code} value={e.code}  >{e.name}</option>)}
                </select>
               
                <button 
                 
                className={`${s.input} ${s.button}`}
                onClick={(e) => { 
                    e.preventDefault()
                    if(country){
                        if(!inputsActivities.countries.includes(country)){
                            setInputActivities({...inputsActivities,countries:[...inputsActivities.countries,country]})
                            const FindCountry = props.countries.find(e=> e.code === country )
                            setBodyCountries([...bodyCountries,FindCountry.name])
                        }
                    }
                } 
                }>Add Country</button>
                  
              
               </div>

               <div className={s.conteiner_input}>
               <button className={s.button} type="submit" onClick={(e) => PostActivity(e)}>Create Activity</button>
               </div>
             
            </form>

            <div className={s.countries}>
                   {bodyCountries.map(e => <span key={e} className={s.span}>{e} <button value={e} onClick={(e) => DeleteCountry(e.target.value)} className={s.button_span}>x</button></span> )}
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