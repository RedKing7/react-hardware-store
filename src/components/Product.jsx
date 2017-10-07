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
      addToCart(index, itemIndex)
   }

   const handleRemove = (e) =>{
      removeFromCart(index);
   }

   return (
      <div className='product'>
         <h3>{productName}</h3>
         <div>${price.toFixed(2)}</div>
         <div>{description}</div>
         {
            !isCart ?
               isAdmin ?
               <button onClick={handleDelete} >Delete</button>
                  :
               <button onClick={handleCart}>Add to cart</button>
            :
               <div>
                  <div>Quantity: {quantity}</div>
                  <button onClick={handleRemove}>Remove</button>
               </div>
         }
      </div>
   )
}

export default Product;