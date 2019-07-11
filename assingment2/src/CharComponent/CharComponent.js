import React from 'react'
import './CharComponent.css'

const CharComponent = (props) => {

    // console.log(props.name)

    return (
        <div className="CharC">
            <p onClick={props.click}>{props.name}</p>
        </div>
    )
}

export default CharComponent
