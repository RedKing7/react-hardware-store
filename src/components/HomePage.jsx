import React, { Component } from 'react';

import Header from './Header';
import Shop from './Shop';

class HomePage extends Component {
   constructor(){
      super();
      this.state = {
         productList: [
            {
               productName: 'Hammer',
               description: 'Itsa hammer',
               price: 12.3
            },
            {
               productName: 'Nail',
               description: 'Itsa nail',
               price: 0.12
            },
            {
               productName: 'Rock',
               description: 'I know it\'s a rock!',
               price: 0.00
            }
         ]
      };  
   }

   addProductToProductList = (newProduct) =>{
      const newProductList = [...this.state.productList];
      newProductList.push(newProduct);
      this.setState({productList: newProductList});
   }

   removeProduct = (index) =>{
      const changedProductList = [...this.state.productList];
      changedProductList.splice(index, 1);
      this.setState({productList: changedProductList});
   }

   render(){
      return(
         <div>
            <header className='App-header'>
               <Header/>
            </header>
            <Shop 
               productList={this.state.productList}
               addProductToProductList={this.addProductToProductList}
               removeProduct={this.removeProduct}
            />
         </div>
      )
   }
}

export default HomePage