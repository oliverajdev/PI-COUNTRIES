import React from "react";
import { connect } from "react-redux";
import s from "../styles/activitiesupdate.module.css"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { baseUrl } from "..";



export function ActivityUpdate(props) {

    const {id} = useParams()



    useEffect(() =>{
        
    fetch(`${baseUrl}/activity/${id}`)
    .then(response => response.json())
    .then(json =>{
        console.log(json)
        setInputActivities(json)
        })
    },[])

    const seasons = ['Winter','Spring','Summer','Outumn'];
    const types = ['Recreation','Cultural','Deportivo','Natural','Health'];
    const difficulty = [1,2,3,4,5]

    const [popup, setPopup] = useState('')

    const [error, setError] = useState({
        errorDuration: '',
        errorName: '',
        errorPost: ''
    });

    const [inputsActivities, setInputActivities] = useState({
        name: '',
        types:'',
        difficulty: '',
        duration: '',
        season:'',
    })

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


   const UpdateActivity = (e) => {
    e.preventDefault()
   if(popup === ''){
    if(inputsActivities.difficulty === '' || inputsActivities.duration === '' || inputsActivities.season === ''){
        
        setError({...error,errorPost: 'Faltan rellenar campos'})
    }
    else{
    setError({...error,errorPost: ''})
    
    if(error.errorDuration === '' && error.errorName === ''){    
        
    fetch(`${baseUrl}/activity/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(inputsActivities), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json())
      .then(r => {
          setPopup('Success')
      })
      .catch(err =>{
        setPopup('Error')
    });
    
  
    }else return

        }
   }

}





    return(

        
        <div>

             {!popup ? null: 
            <div className={s.popup} >
                <p className={s.popup_info}>{popup}</p>
                <Link 
                className={s.popup_button}
                to = {'/activities' }
                
                   

                   
            
                >x</Link>
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
                        <option disabled value={inputsActivities.types}>{inputsActivities.types}</option>
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
                        <option disabled value={inputsActivities.difficulty}>{inputsActivities.difficulty}</option>
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
                        <option disabled value={inputsActivities.season}>{inputsActivities.season}</option>
                        {seasons.map(e => <option value={e}>{e}</option>)}

                    </select>
               </div>
              

               <div className={s.conteiner_input}>
               <button className={s.button} type="submit" onClick={(e) => UpdateActivity(e)}>Update Activity</button>
               </div>
             
            </form>
        </div>
    )

}