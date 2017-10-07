import React from 'react'
//Dumb/stateless component

const Product = ({ 
   productName, 
   price, 
   description, 
   index, 
   itemIndex, 
   isAdmin, 
   removeProduct, 
   addToCart, 
   removeFromCart, 
   isCart, 
   quantity
}) => {
   const handleDelete = (e) =>{
      e.preventDefault();
      removeProduct(index);
   }

   const handleCart = (e) =>{
      console.log(index);
      addToCart(index)
   }

   const handleRemove = (e) =>{
      console.log(index, itemIndex)
      removeFromCart(index);
   }

   return (
      <div className='product'>
         <h3>{productName}</h3>
         <div>${price}</div>
         <div>{description}</div>
         {
            !isCart ?
               isAdmin ?
               <button onClick={handleDelete} >Delete</button>
                  :
               <button onClick={handleCart}>Add to cart</button>
            :
               <div>
                  <div>{quantity}</div>
                  <button onClick={handleRemove}>Remove</button>
               </div>
         }
      </div>
   )
}

export default Product;