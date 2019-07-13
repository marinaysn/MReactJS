import React from 'react'
import './Person.css';
import Radium, {StyleRoot} from 'radium'
const person = (props) => {

    const style = {
        '@media (max-width:575px)': {
            width: '450px',
            border: '1px solid rgb(23, 52, 212)',
            'box-shadow': '0 12px, 13px rgb(19, 80, 6)',
            padding: '10px',
            'text-align': 'right',
            background: 'rgb(227, 245, 223)'
        },

        '@media (min-width:768px)': {
            width: '450px',
            border: '3px solid rgb(23, 52, 212)',
            'box-shadow': '0 12px, 13px rgb(19, 80, 6)',
            padding: '5px',
            'text-align': 'left',
            background: 'coral'
        }

    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name}. and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person);
