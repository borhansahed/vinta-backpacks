import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <h2> Selected Backpacks</h2>
            <button className='btn btn-outline-success'>Choose one for me </button>
            <button className='btn btn-outline-danger d-block mt-2'>Choose again</button>
        </div>
    );
};

export default Cart;