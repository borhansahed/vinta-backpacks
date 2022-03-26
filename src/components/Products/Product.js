import React, { useEffect, useState } from 'react';
import './Product.css'
import Backpack from '../Backpacks/Backpack';
import Cart from '../Cart/Cart';

const Product = () => {
    const [product , setProduct] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
   
    return (
        <div className='product-container'>
        <div className='backpacks-item'>
        {
              product.map(item => <Backpack key={item.id} item={item} >

                                            </Backpack>)
          }
        
        </div>
        <div className='cart-container shadow-lg'>
            <Cart></Cart>
        </div>
        </div>
    );
};

export default Product;