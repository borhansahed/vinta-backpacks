import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const {name }=props.cart
    return (
        <div className='selected-backpacks'>
            <img src={props.item.picture}alt="" />
             <p>{props.item.name}</p>
             <p><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p>
            </div>
    );
};

export default Cart;