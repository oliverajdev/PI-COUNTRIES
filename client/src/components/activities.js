import React from "react";

export default function Activities(props) {
    return (
        <div>
            <h3>Activities</h3>
            <h5>{props.name}</h5>
            <p>{props.difficulty}</p>
            <p>{props.duration}</p>
            <p>{props.season}</p>
        </div>
    )
}