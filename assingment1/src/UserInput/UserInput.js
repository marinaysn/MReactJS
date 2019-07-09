import React from 'react'

const UserInput = (props) => {

    const styleDiv = {
        background: 'rgb(204, 228, 248)',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        width: '200px'
      }

    return (
        <div style={styleDiv}>
            <input 
            type="text" 
            onChange={props.change} 
            value= {props.currentName} />
        </div>
    )
}

export default UserInput
