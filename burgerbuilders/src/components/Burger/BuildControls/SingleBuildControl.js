import React from 'react';
import cls from './singleBuildControl.module.css';

const singleBuildControl = (props) => {
    return (
        <div className={cls.SingleBuildControl} >
            <div className={cls.Label}>{props.label}</div>
            <button className={cls.Remove}>Remove</button>
            <button className={cls.Add}>Add</button>
            
        </div>
    )
}

export default singleBuildControl
