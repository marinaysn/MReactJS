import React from 'react';
import cls from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    return (
        <div className={cls.Burger}>
            <BurgerIngredient type='BreadTop' />
            
            <BurgerIngredient type='Meat' />
            <BurgerIngredient type='Cheese' />
            <BurgerIngredient type='Salad' />
            <BurgerIngredient type='Bacon' />
            
            <BurgerIngredient type='BreadBottom' />
        </div>
    )
}

export default Burger;
