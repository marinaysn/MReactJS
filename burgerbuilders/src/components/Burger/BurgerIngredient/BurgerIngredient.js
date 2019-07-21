import React, { Component } from 'react';
import cls from './burgerIngredient.module.css';
import PropTypes from 'prop-types';


export class BurgerIngredient extends Component {
    render() {

        let ingredient = null;

        // if (!props.type || !(typeof props.type === 'string') || /([A-Z][a-z]+)/g.test(props.type) ) {
        //     props.type = 'none'
        // }

        switch (this.props.type) {
            case ('BreadBottom'):
                ingredient = <div className={cls.BreadBottom}></div>;
                break;

            case ('BreadTop'):
                ingredient = <div className={cls.BreadTop}>
                    <div className={cls.Seeds1}></div>
                    <div className={cls.Seeds2}></div>
                </div>;
                break;

            case ('Meat'):
                ingredient = <div className={cls.Meat}></div>;
                break;

            case ('Cheese'):
                ingredient = <div className={cls.Cheese}></div>;
                break;

            case ('Salad'):
                ingredient = <div className={cls.Salad}></div>;
                break;

            case ('Bacon'):
                ingredient = <div className={cls.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }

}


BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;

