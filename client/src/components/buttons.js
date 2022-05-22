import React from "react";
import s from "../styles/buttons.module.css"
import { getUrl, setPage } from "../redux/actions/actions";
import { connect } from "react-redux";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Buttons(props){

    const HandlerNext = () =>{
        
       if(props.current !== props.length-1) {
        props.getUrl(props.search,props.continent,props.order,props.page+1,10);
        props.setPage(1)
       }
    }
    const HandlerPrev = () =>{
        if(props.current  !== 0 ) {
            props.getUrl(props.search,props.continent,props.order,props.page-1,10);
            props.setPage(-1)
        } 
    }

    return(
        
        
        <div className={s.container}>
          
            
        <button className={s.button} onClick={() => HandlerPrev()} ><FontAwesomeIcon icon={faArrowLeft}/></button>
      
        <button className={s.button}  onClick={() => HandlerNext()}><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    )
}


export const mapStateToProps = function(state){
    return {
  
        continent: state.continent,
        order: state.order,
        search: state.search,
        page: state.page,
        size: state.size,
        length: state.length,
        current: state.current
    }
  };
  
  
  export const mapDispatchToProps = function(dispatch){
      return {
          getUrl: (search,orderq,filterq,page,size) => dispatch(getUrl(search,orderq,filterq,page,size)),
          setPage: (current) => dispatch(setPage(current))
    
           }
    
    };
    
export default connect(mapStateToProps,mapDispatchToProps)(Buttons)
