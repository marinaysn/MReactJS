import React from 'react'
import Auxiliary from "../../../hoc/Auxiliary";
import cls from "./OrderSummary.module.css";

const OrderSummary = (props) => {

    const orderedItems = Object.keys(props.itemsOrdered)
    .map(i => {
       return <li key={i}><span>{i}</span>: {props.itemsOrdered[i]} </li> 
    });


    return (
        <Auxiliary>
            <h4>Added ingreients: </h4>
            <ul>
                {orderedItems}
            </ul>
            <p>Continue with Checkout?</p>
        </Auxiliary>
    )
}

export default OrderSummary
