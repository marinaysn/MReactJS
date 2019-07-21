import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';


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
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Auxiliary>
                <Burger ingredients = {this.state.ingredients} />
                <BurgerIngredient />
            </Auxiliary>
        )
    }
}

export default BurderBuilder;
