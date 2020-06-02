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
        inventory: [],
        isEditing: false
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
      axios.delete(`api/product/${id}`)
      .then(res => {
        this.setState({inventory: res.data})
        this.componentDidMount()  //there needs to be something to call the new inventory after the delete happens so that it can be passed down to Product in its new state for rendering; somehow reset the server so that things can repopulate?? the delete IS happening behind the scenes.... but it's crashing on the display
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
              isEditing={this.state.isEditing}
              deleteProductFn={this.deleteProduct} 
          />
          <Form getInventoryFn={this.componentDidMount}
          />

          </div>
          
  
        </div>
      )
    }
  };


export default App;
