import React, { Component } from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView'
import CartView from './CartView'

class Shop extends Component {
   constructor(){
      super();
      this.state = {
         isAdmin: true
      }
   }

   toggleAdmin = () =>{
      const notAdmin = !this.state.isAdmin;
      this.setState({isAdmin: notAdmin}); //best practice, rather than 'this.state.thing = !this.state.thing'
   }

   render() {
      return (
         <div className='main'>
            <div className='shop'>
               {
                  this.isAdmin ?
                     <ShopView
                        productList={this.props.productList}
                        isAdmin={this.isAdmin}
                     />
                  : 
                     <AdminView
                        productList={this.props.productList}
                        addProductToProductList={this.props.addProductToProductList}
                        isAdmin={this.isAdmin}
                        removeProduct={this.props.removeProduct}
                     />
               }
            </div>

            <CartView/>
         </div>
      );
   }
}

export default Shop;