import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { deleteActivity, getActivities } from "../redux/actions/actions";
import  List  from "../components/list";
import s from "../styles/activitieslist.module.css"


export function ActivitiesList(props) {

    useEffect(() =>{
        props.getActivities()
    },[])



    
    return(
        <div className={s.container}>
            {props.activities.length > 0 ? props.activities.map(e => (
                <List
                key = {e.id}
                name = {e.name}
                type = {e.types}
                duration = {e.duration}
                difficulty = {e.difficulty}
                season = {e.season}
                countries = {e.countries}
                id = {e.id}
                deleteActivity = {props.deleteActivity}
                />
                  
            )): <span style={{color:'white'}}>No results found</span>}
        </div>
    )

}



export const mapStateToProps = function(state) {
    return{
        activities: state.activities
    }
}


export const mapDispatchToProps = function(dispatch) {
    return {
        getActivities: () => dispatch(getActivities()),
        deleteActivity: (id) => dispatch(deleteActivity(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesList)