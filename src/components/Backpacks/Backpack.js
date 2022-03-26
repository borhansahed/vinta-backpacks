import React from 'react';
import './Backpacks.css'

const Backpack = (props) => {
    const {name , price ,picture }=props.item
    return (
        <div className='backpack-item shadow-lg' >

    
        <img  src={picture} alt="" />
       
          <h4>{name}</h4>
          
          <p>Price :${price}</p>  
          <button className='w-100 btn btn-outline-dark'>Add to Cart</button>
        
        </div>
    );
};

export default Backpack;