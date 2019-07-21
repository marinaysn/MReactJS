import React from 'react';
import cls from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    // get items from BurgerBuilder to Burger and transfer them to array
    // method 1
    const locIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    // get items from BurgerBuilder to Burger and transfer them to array
    // method 2
    const ingredientsArr = this.props;
    let locIngredients1 = [];
    Object.keys(ingredientsArr).forEach(ingKey => {
        for (let i = 0; i < ingredientsArr[ingKey]; i++)
            locIngredients1.push(
                <BurgerIngredient key={ingKey + i} type={ingKey} />)
    });

    // get items from BurgerBuilder to Burger and transfer them to array
    // method 3
    const ingredientsObj = props.ingredients;
    const locIngredients2 = [];
    for (const key in ingredientsObj) {
        for (let i = 0; i < ingredientsObj[key]; i++) {
            locIngredients2.push(<BurgerIngredient key={key + i} type={key} />)
        }
    }




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
