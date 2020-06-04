import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
    constructor() {
      super()
      
      this.state = {
        inventory: [],    //{id, name, price, img}, {id, name, price, img}...
        selectedProduct: {}  //created in Product.js on Edit button
      }
      this.getInventory = this.getInventory.bind(this)
      this.updateSelectedProduct = this.updateSelectedProduct.bind(this)
    }

    //get inventory from database
    componentDidMount(){
      this.getInventory()
    } 

    getInventory() {  //returns with the array of objects
      axios.get('/api/inventory')
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch(res => console.log('error getting products for inventory'))
    }

    //create selectedProduct object to pass to Form.js so inputs can be changed/updated through componentDidMount/Save Changes button
    updateSelectedProduct(productToBeEdited) {
      this.setState({selectedProduct: productToBeEdited})
    }

    render() {
      
      return (
        <div>
          <Header/>

          <div className='Dash-Form-Home'>
          <Dashboard 
              productList={this.state.inventory}
              getInventory={this.getInventory}   
              updateSelectedProduct={this.updateSelectedProduct} 
          />
          <Form getInventory={this.getInventory} 
                selectedProduct={this.state.selectedProduct}
          />
          </div>

        </div>
      )
    }
  };


export default App;
