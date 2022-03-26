import React from 'react';
import './Backpacks.css'

const Backpack = (props) => {
    const {name , price ,picture }=props.item
    return (
        <div className='backpack-item'>

        <div className='picture'>
        <img src={picture} alt="" />
        </div>
          <h3>{name}</h3>
          
          <p>Price :${price}</p>  
          <button className='w-100 btn btn-outline-secondary'>Add to Cart</button>
        
        </div>
    );
};

export default Backpack;