import React from 'react';
import cls from './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BuildControls from '../Burger/BuildControls/BuildControls'

const Burger = (props) => {

    // // get items from BurgerBuilder to Burger and transfer them to array
    // // method 1
    // let locIngredients3 = Object.keys(props.ingredients)
    //     .map(igKey => {
    //         return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey + i} type={igKey} />
    //         });
    //     }).reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, []);

    //     console.log(locIngredients3);

    // // get items from BurgerBuilder to Burger and transfer them to array
    // // method 2
    // const ingredientsArr = props.ingredients;
    // let locIngredients1 = [];
    // Object.keys(ingredientsArr).forEach(ingKey => {
    //     for (let i = 0; i < ingredientsArr[ingKey]; i++){
    //         locIngredients1.push(
    //             <BurgerIngredient key={ingKey + i} type={ingKey} />)}
    // });

    // get items from BurgerBuilder to Burger and transfer them to array
    //we have to convert this object into an array of the values of the ingredients.
    // method 3
    const ingredientsObj = props.ingredients;
    let locIngredients = [];
    for (const key in ingredientsObj) {
        for (let i = 0; i < ingredientsObj[key]; i++) {
            locIngredients.push(<BurgerIngredient key={key + i} iType={key} />)
        }
    }

    console.log(locIngredients);

if (locIngredients.length === 0) {
    locIngredients = <p>Please Add Ingredients</p>
}


    return (
        <div className={cls.Burger}>
            <BurgerIngredient iType='BreadTop' />

           {locIngredients}

            <BurgerIngredient iType='BreadBottom' />

            {/* <BuildControls /> */}
        </div>
    )
}

export default Burger;
