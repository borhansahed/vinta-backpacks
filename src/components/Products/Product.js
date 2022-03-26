import React, { useEffect, useState } from 'react';
import './Product.css'
import Backpack from '../Backpacks/Backpack';
import Cart from '../Cart/Cart';

const Product = () => {
    const [product , setProduct] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[]);

    const addToCart = (product) => {
      const newCart = [...cart , product]
      
          if (newCart.length >4){
            return alert("cannot add more than 4 backpacks");
          }
      
      
      setCart(newCart);

    }
   const  chooseOne = ()=> {
  
  


   }
   const  chooseAgain = ()=> {
     
      setCart([]);
    
   }
    return (
        <div className=' product-container '>
        <div className='  backpacks-item'>
      
      {
              product.map(item => <Backpack key={item.id} item={item}
              addToCart={addToCart} > </Backpack>)
                            
          }
     
      
        
        </div>
        <div className='  cart-container shadow-lg '>
        <h2> Selected Backpacks</h2>
        
       {
           cart.map(item=> <Cart
           key ={item.id}
             item={item}></Cart>)
       } 

           <button onClick={chooseOne}  className='btn btn-outline-success'>Choose one for me </button>
           <button onClick={chooseAgain} className='btn btn-outline-danger d-block mt-2'>Choose again</button>
        </div>
        </div>
    );
};

export default Product;