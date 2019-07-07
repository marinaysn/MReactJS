import React from 'react'
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click} > Hi, {props.name} </p>
            <p>Welcome,  {props.name} </p>
        </div>
    )
}

export default UserOutput
