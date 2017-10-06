import React, { Component } from 'react';

class Header extends Component {
   constructor(){
      super()
      this.state = {
         itemCurrentlyOnSale: 'A Hammer',
         editSaleItem: false
      };
   }

   toggleEditSaleItem = () =>{
      const editSaleItem = !this.state.editSaleItem;
      this.setState({editSaleItem}); //best practice, rather than 'this.state.thing = !this.state.thing'
   }

   handleItemCurrentlyOnSaleChange = (e) =>{
      const itemCurrentlyOnSale = e.target.value;
      this.setState({itemCurrentlyOnSale});
   }
   
   render() {
      return (
         <div>
            <h1>My Hardware Store</h1>
            <div>Currently On Sale: {this.state.itemCurrentlyOnSale}!</div>
            <span>
               <button onClick={this.toggleEditSaleItem}>
                  {this.state.editSaleItem ? 'Hide' : 'Edit Item'}
               </button>
            </span>
            {
               this.state.editSaleItem ?
                  <div>
                     <input
                        type="text"
                        value={this.state.itemCurrentlyOnSale}
                        onChange={this.handleItemCurrentlyOnSaleChange}
                     ></input>
                  </div>
               : null   
            }
         </div>
      );
   }
}

export default Header;