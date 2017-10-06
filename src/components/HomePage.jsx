import React, { Component } from 'react';

import Header from './Header'

class HomePage extends Component {
   render(){
      return(
         <div>
            <div className='App-header'>
               <Header/>
            </div>   
            {/* this.state.adminLoggedIn ? <Admin /> : <User /> */}
         </div>
      )
   }
}

export default HomePage