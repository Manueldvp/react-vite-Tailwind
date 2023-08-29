import React from 'react'
import { useContext } from 'react'

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        sum += product.price * product.quantity
    });
    
    return sum
};

export default totalPrice