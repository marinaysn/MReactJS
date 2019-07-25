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
        <p>Price $ <strong>{props.cost.toFixed(2)}</strong></p>

            {controls.map(ctrl => (
                <SingleBuildControl key={ctrl.label} 
                label={ctrl.label} 
                removed={() => props.ingredientRemoved(ctrl.type)}

                added={() => props.ingredientAdded(ctrl.type)} 
                disabled={props.disabled[ctrl.type]}
                />
            ))}

        </div>
    )
}

export default buildControls;
