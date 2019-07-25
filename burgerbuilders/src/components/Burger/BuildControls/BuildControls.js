import React from 'react';
import cls from './buildControls.module.css'
import SingleBuildControl from '../BuildControls/SingleBuildControl'

const controls = [
    {label: 'Salad', type: 'Salad'},
    {label: 'Bacon', type: 'Bacon'},
    {label: 'Cheese', type: 'Cheese'},
    {label: 'Meat', type: 'Meat'}
]

const buildControls = (props) => {
    return (
        <div className={cls.BuildControls}>

            {controls.map(ctrl => (
                <SingleBuildControl key={ctrl.label} label={ctrl.label} />
            ))}

        </div>
    )
}

export default buildControls;
