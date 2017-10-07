import React, { Component } from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
   constructor(){
      super();
      this.state = {
         isAdmin: false,
         cart:[],
         cartTotal:0
      }
   }

   toggleAdmin = () =>{
      this.setState({isAdmin: !this.state.isAdmin});
   }

   getTotal = () =>{
      let cart = this.state.cart;
      console.log(cart);
      if(cart.length > 0){
         let prices = cart.map((item)=>{
            return item.price;
         })
         this.setState({cartTotal: prices.reduce((sum, val)=>{return sum + val})})
      }
      return this.state.total;
   }

   addToCart = (index) =>{
      const newCart = [...this.state.cart];
      const newCartItem = this.props.productList[index];
      console.log(newCartItem);
      newCartItem.index = index;
      newCart.push(newCartItem);
      this.setState({cart: newCart}, this.getTotal);
   }

   render() {
      return (
         <div className='main'>
            <div className='shop'>
               <button onClick={this.toggleAdmin}>
                  {this.state.isAdmin ? 'Switch to User' : 'Switch to Admin'}
               </button>
               {
                  this.state.isAdmin ?
                     <AdminView
                        productList={this.props.productList}
                        addProductToProductList={this.props.addProductToProductList}
                        removeProduct={this.props.removeProduct}
                        isAdmin={true}
                     />
                        : 
                     <ShopView
                        productList={this.props.productList}
                        addToCart={this.addToCart}
                        isAdmin={false}
                     />
               }
            </div>

            <CartView
               cart={this.state.cart}
               getTotal={this.getTotal}
               total={this.state.cartTotal}
            />
         </div>
      );
   }
}

export default Shop;