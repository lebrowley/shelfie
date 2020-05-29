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
        inventory: []
      }
      this.componentDidMount = this.componentDidMount.bind(this)
      this.deleteProduct = this.deleteProduct.bind(this)
    }

    //get inventory from database
    componentDidMount(){
      axios.get('/api/inventory')
      .then(res => {
        this.setState({inventory: res.data})
      })
      .catch(res => console.log('error getting products for inventory')) 
    } 

    deleteProduct(id){
      axios.delete(`api/products/${id}`)
      .then(res => {
        this.setState({inventory: res.data})
        console.log('successfully deleted')
      })
      .catch(res => {
        console.log('error deleting product')
      })
    }

    render() {
      return (
        <div>
          <Header/>

          <div className='Dash-Form-Home'>
          <Dashboard 
              productList={this.state.inventory}
              deleteProductFn={this.state.deleteProduct}  
          />
          <Form getInventoryFn={this.state.componentDidMount}/>

          </div>
          
  
        </div>
      )
    }
  };


export default App;
