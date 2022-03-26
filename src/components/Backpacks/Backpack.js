
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Backpacks.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Backpack = (props) => {
    const{addToCart ,item} = props;
    const {name , price ,picture }=props.item;
   
    return (
        <div className='backpack-item shadow-lg' >

    
        <img  src={picture} alt="" />
       
          <h4>{name}</h4>
          
          <p>Price :${price}</p>  
          <button onClick={()=> addToCart(item)} className='w-100 btn btn-outline-dark btn-cart'><p className='mt-2 me-2' >Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
           </button>
        
        </div>
    );
};

export default Backpack;