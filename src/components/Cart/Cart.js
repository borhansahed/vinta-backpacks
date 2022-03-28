import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({item ,removeItem}) => {
    const {name, picture }= item
    // const remove = () => {
    //    console.log('hello')  
 
    return (
        <div className='selected-backpacks'>
            <img src={picture}alt="" />
             <p>{name}</p>
             <button onClick={()=>removeItem(item)} className='remove-btn'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
    );
};

export default Cart;