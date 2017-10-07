import React, { Component } from 'react';

import Product from './Product'

class ProductList extends Component {
      render() {
            const productList = this.props.productList;

            const productComponents = productList.map((product, index) => {
                  return <Product
                        productName={product.productName}
                        description={product.description}
                        price={product.price}
                        key={index}
                        index={index}
                        isAdmin={this.props.isAdmin}
                        removeProduct={this.props.removeProduct}
                        addToCart={this.props.addToCart}
                  />
            });

            return (
                  <div className='products'>
                        <h1>Products</h1>
                        {productComponents}
                  </div>
            );
      }
}

export default ProductList;