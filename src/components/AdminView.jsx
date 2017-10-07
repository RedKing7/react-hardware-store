import React, { Component } from 'react';

import ProductList from './ProductList'
import ProductForm from './ProductForm'

class AdminView extends Component{

   render(){
      return(
         <div>
            <h1>Admin View</h1>
            <ProductList
                  productList={this.props.productList}
                  isAdmin={this.props.isAdmin}
                  removeProduct={this.props.removeProduct}
            />

            <ProductForm 
                  addProductToProductList={this.props.addProductToProductList}
            />
         </div>
      )
   }
}

export default AdminView;