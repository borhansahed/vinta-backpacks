import React, { useEffect, useState } from 'react';
import './Product.css'
import Backpack from '../Backpacks/Backpack';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Product = () => {
  const MySwal = withReactContent(Swal);
    const [product , setProduct] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[]);

    const addToCart = (product) => {
      let newCart = []
      const exist =cart.find((singleProduct)=> {return singleProduct.id === product.id})
      // console.log(findSameProduct)
      if(!exist){
       newCart = [...cart , product];
      }
      else{
        return (MySwal.fire({
          icon: 'error',
           html: <h3>YOU CAN'T ADD SAME BACKPACKS!</h3>,
           
         }));
      }
    //  if(product){
      
    //    if (product >2){
    //      return alert ('cant')
    //    }
      
    //   }
    if (newCart.length >4){
            return (MySwal.fire({
             icon: 'error',
              html: <h3>YOU CAN'T ADD MORE THAN 4 BACKPACKS!</h3>,
              
            }));
          }

      setCart(newCart);
 
    }
   const  chooseOne = ()=> {
    
  const findOne = cart;
  const  getOne= findOne[Math.floor(Math.random() *findOne.length)];
 
  setCart([getOne]);
  // return alert(getOne);
  


   }
   const  chooseAgain = ()=> {
     
      setCart([]);
    
   }
   const removeItem = (id) => {
    // const items = cart[id];
  //  {
  //    items.slice(0)
  //  }
  // return items;
  
 
   }
    return (
        <div className=' product-container '>
        <div className='  backpacks-item'>
      
      {
              product.map(item => <Backpack key={item.id} item={item}
              addToCart={addToCart}> 
              </Backpack>)
                            
          }
     
      
        
        </div>
        <div className='  cart-container shadow-lg '>
        <h2> Selected Backpacks</h2>
        
       {
           cart.map(item=> <Cart
             key ={item.id}
             item={item}
             removeItem={removeItem}>

             </Cart>)
       } 

           <button onClick={chooseOne}  className='btn btn-outline-success'>Choose one for me </button>
           <button onClick={chooseAgain} className='btn btn-outline-danger d-block mt-2'>Choose again</button>
        </div>
        </div>
    );
};

export default Product;