import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    
    let totalDuration = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        totalDuration = totalDuration + course.duration;
    }
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        totalPrice = totalPrice + course.price;
    }

    return (
        <div className='cartStyle'>
            <h2 className='text-center mb-4'>Overview</h2>
            <h5>Total Enrolled: {cart.length}</h5>
            <h5>Duration: {totalDuration}</h5>
            <h5>Total: $ {totalPrice}</h5>
        </div>
    );
};

export default Cart;