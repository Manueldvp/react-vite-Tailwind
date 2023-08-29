import React from 'react'
import { useContext } from 'react'

export const qty = (products) => {
    let qty = 0;
    products.forEach(product => {
        qty += product.quantity
    });
    
    return qty
};

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        sum += product.price * product.quantity
    });
    
    return sum
};

export default totalPrice