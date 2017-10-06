// import React, { Component } from 'react';
import React from 'react'
//Dumb/stateless component

const Product = ({productName, price, description}) =>{
   return(
      <div className='product'>
         <h3>{productName}</h3>
         <div>${price}</div>
         <div>{description}</div>
         {/* <button>Add to cart</button> */}
      </div>
   )
}

// class Product extends Component {
//    render() {
//       const productName = this.props.productName;
//       const description = this.props.description;
//       const price = this.props.price;

//       return (
//          <div className='product'>
//             <h3>{productName}</h3>
//             <div>${price}</div>
//             <div>{description}</div>
//          </div>
//       );
//    }
// }

export default Product;