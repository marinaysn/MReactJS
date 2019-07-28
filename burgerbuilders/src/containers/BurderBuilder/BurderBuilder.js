import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const ING_PRICES = {
            Salad: 0.5,
            Bacon: 0.75,
            Cheese: 0.5,
            Meat: 1
}


export class BurderBuilder extends Component {

    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 4,
        purchasable : false
    }

    updatePurchase = (updatedIngredients) => {

        const totalIng = {...updatedIngredients};
        const sum = Object.keys(totalIng)
        .map(i => {
            return totalIng[i]
        }).reduce((sum, el) => {
            return sum + el
        }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (iType) => {
        const oldCount = this.state.ingredients[iType];
        const updatedCounter = oldCount +1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[iType] = updatedCounter;
        const extraCost = ING_PRICES[iType]
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + extraCost;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchase(updatedIngredients);
    };

    deleteIngredientHandler = (iType) => {
        const oldCount = this.state.ingredients[iType];
        const updatedCounter = oldCount <= 0 ? 0 : oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[iType] = updatedCounter;
        const extraCost = ING_PRICES[iType]
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - extraCost;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

        this.updatePurchase(updatedIngredients);

    }

   
    render() {

        const disableBtn = {...this.state.ingredients};

        for (let i in disableBtn) {
            disableBtn[i] = disableBtn[i] <= 0
            
        };

        return (
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerIngredient />

                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.deleteIngredientHandler}
                disabled={disableBtn}
                cost={this.state.totalPrice}
                ableToPurchase={this.state.purchasable}
                />
                

            </Auxiliary>
        )
    }
}

export default BurderBuilder;
