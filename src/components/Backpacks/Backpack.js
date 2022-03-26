import React from 'react';


const Backpack = (props) => {
    const {name , price ,picture }=props.item
    return (
        <div>
        <div>
        <img src={picture} alt="" />
          <h3>{name}</h3>
          
          <p>Price :${price}</p>  
          <button>Add to Cart</button>
        </div>
    
        </div>
    );
};

export default Backpack;