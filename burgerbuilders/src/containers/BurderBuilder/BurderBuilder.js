import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export class BurderBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { ingredient: {
    //         salad: 1,
    //         bacon: 1,
    //         cheese: 2,
    //         meat: 2
    //     }  };
    //   }


    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        }
    }
    render() {
        return (
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerIngredient />

                <BuildControls />
                
            </Auxiliary>
        )
    }
}

export default BurderBuilder;
