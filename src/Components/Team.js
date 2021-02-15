import React from "react";

const Team = (props) => {
    const { details } = props;

    if (!details) {
        return <h2>Working on fetching data...</h2>
    }
    
    return (
        <div>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.position}</p>
        </div>
    )
}

export default Team;