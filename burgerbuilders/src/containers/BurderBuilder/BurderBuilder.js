import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';


export class BurderBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <Burger />
                <BurgerIngredient />
            </Auxiliary>
        )
    }
}

export default BurderBuilder;
