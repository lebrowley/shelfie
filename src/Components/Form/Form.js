import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        
        this.cancelAndClear = this.cancelAndClear.bind(this)
        this.addToInventory = this.addToInventory.bind(this)
    }

    //handle changes (one for each input)
    updateImage(value){
        this.setState({imgurl: value})
    }

    updateName(value){
        this.setState({name: value})
    }

    updatePrice(value){
        this.setState({price: value})
    }

    //post new product to database 
    //use this.props.getInventoryFn (from App.js) in this function??
    //how to get the new product to display through using the prop that passed down the componentDidMount from App.js (which is getting all the products to display them)??
    addToInventory(){
        const {name, price, img} = this.state
        const {getInventoryFn} = this.props
        axios.post('/api/product', {name, price, img})
        .then(res => {
            console.log('success')
        })
        .then( () => {
            getInventoryFn()
        })
        .catch(res => {
            console.log('error adding to inventory')
        })
    }

    //clear input boxes
    //getting the boxes to clear when the Add to Inventory button is clicked too
    cancelAndClear(){
        this.setState(
            {name: '', price: 0, imgurl: ''}
        )
    }

    render() {
        const {name, price, imgurl} = this.state

        //getting the user's url to preview?? using a ternary possibly...
        //getting the image to be added to the database as a text string, not the value null...ie getting the image added through the input box to display as an image....
        return (
        <div className='Form-box'>

            <img 
                className='Form-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp4gNi8GXkEdS-wNV9qN1ZJ-i3N_gKtjzz__oFcm6SBKsZNAA-&usqp=CAU'
                alt='form-preview'/>

            <div className='Form-input'>
                Image URL:
                <input className='input'
                    value= {imgurl}
                    type='text'
                    onChange={ (e) => this.updateImage(e.target.value)}    
                />
                Product Name: 
                <input className='input'
                    value= {name}
                    onChange= { (e) => this.updateName(e.target.value)}
                />
                Price: 
                <input className='input'
                    value= {price}                    
                    onChange= { (e) => this.updatePrice(e.target.value)}
                />
            </div>

             <div className='Form-buttons'>
                <button onClick={this.cancelAndClear}>Cancel</button>
                <button onClick={this.addToInventory}>Add to Inventory</button>
            </div> 
            
        </div>
           
        )
    }
};

export default Form;