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
      if(cart.length > 0){
         let prices = cart.map((item)=>{
            if(item.quantity){
               return item.price * item.quantity
            } else {
               return item.price;
            }
         })
         this.setState({cartTotal: prices.reduce((sum, val)=>{return sum + val})})
      } else {
         this.setState({cartTotal:0})
      }
      return this.state.total;
   }

   addToCart = (index) =>{
      const newCart = [...this.state.cart];
      const newCartItem = this.props.productList[index];
      newCartItem.index = index;

      let matchIndex = newCart.findIndex((item)=>{return item.index === index})
      if(matchIndex !== -1){
         newCart[matchIndex].quantity += 1;
         this.setState({cart: newCart}, this.getTotal);         
      } else {
         newCartItem.quantity = 1;
         newCart.push(newCartItem);
         this.setState({cart: newCart}, this.getTotal);
      }
   }

   removeFromCart = (index) =>{
      const changedCart = [...this.state.cart];
      changedCart.splice(index, 1);
      this.setState({cart: changedCart}, this.getTotal);
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
               removeFromCart={this.removeFromCart}
            />
         </div>
      );
   }
}

export default Shop;