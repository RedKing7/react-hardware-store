import React from 'react'
//Dumb/stateless component

const Product = ({ productName, price, description, index, isAdmin, removeProduct }) => {
   const handleDelete = (e) =>{
      e.preventDefault();
      removeProduct(index);
   }
   return (
      <div className='product'>
         <h3>{productName}</h3>
         <div>${price}</div>
         <div>{description}</div>
         {<button>Add to cart</button>}
         {
            isAdmin ?
               null
               :
               <button onClick={handleDelete} >Delete</button>
         }
      </div>
   )
}

export default Product;