import React, { Component } from 'react';
import Product from './Product'

class CartView extends Component {
   render() {
      const cartComponents = this.props.cart.map((item, index)=>{
         return <Product
            productName={item.productName}
            price={item.price}
            key={index}
            index={index}
            itemIndex={item.index}
            isCart={true}
            quantity={item.quantity}
         />
      })

      return (
         <div className='cart'>
            <h1>Cart View</h1>
            {cartComponents}
            <div>
               <h4>Total: ${this.props.total}</h4>
            </div>
         </div>
      );
   }
}

export default CartView;