import React from 'react'
import cls from './CharComponent.css'

const CharComponent = (props) => {


    return (
    <div className={cls.CharC}>
        <p onClick={props.click}>{props.character}</p>
        </div>
    );
};

export default CharComponent
