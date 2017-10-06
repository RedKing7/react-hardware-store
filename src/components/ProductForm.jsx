import React, { Component } from 'react';

class ProductForm extends Component {
   constructor(){
      super();

      this.state = {
         newProduct: {
            productName: '',
            price: '',
            description: ''
         }
      }
   }

   handleNewProductChange = (e) =>{
      const attributeName = e.target.name;
      const attributeValue = e.target.value;

      const newProduct = {...this.state.newProduct};
      newProduct[attributeName] = attributeValue;

      this.setState({newProduct});
   }

   handleSubmit = (e) =>{
      e.preventDefault();
      this.props.addProductToProductList(this.state.newProduct);

      const emptyProduct = {
         productName: '',
         price: '',
         description: ''
      }

      this.setState({newProduct: emptyProduct})
   }

   render() {
      return (
         <div>
            <h2>Create a New Product</h2>
            <form onSubmit={this.handleSubmit}>
               <div>
                  <input
                     type="text"
                     name='productName'
                     placeholder='Name'
                     value={this.state.newProduct.productName}
                     onChange={this.handleNewProductChange}
                  />
               </div>

               <div>
                  <input
                     type="number"
                     name='price'
                     min='0.00'
                     step='.01'
                     placeholder='Price'
                     value={this.state.newProduct.price}
                     onChange={this.handleNewProductChange}
                  />
               </div>

               <div>
                  <textarea
                     cols="18"
                     rows="3"
                     type="text"
                     name='description'
                     placeholder='Description'
                     value={this.state.newProduct.description}
                     onChange={this.handleNewProductChange}
                  />
               </div>

               <div><input type='submit' value='Create New Product'/></div>
            </form>
         </div>
      );
   }
}

export default ProductForm;