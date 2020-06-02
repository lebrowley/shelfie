import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
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
    addToInventory(){
        const {name, price, imgurl} = this.state
        const body = {name: name, price: price, img: imgurl}
        
        axios.post('/api/product', body)
        .then(res => {
            const {getInventoryFn} = this.props

            getInventoryFn()
            this.cancelAndClear()
            console.log('success adding to inventory')
        })
        .catch(res => {
            console.log('error adding to inventory')
        })
    }

    //edit a product
    updateProduct(id){
        const {name, price, imgurl} = this.state
        const body = {name: name, price: price, img: imgurl}

        axios.put(`/api/product/${id}`, body)
        .then(res => {
            const {getInventoryFn} = this.props

            getInventoryFn()
            this.cancelAndClear()
            console.log('success editing a product')
        })
        .catch(res => {
            console.log('error editing product')
        })
    }

    //clear input boxes
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
                <label>Image URL:</label>
                <input className='input'
                    value= {imgurl}
                    onChange={ (e) => this.updateImage(e.target.value)}    
                />
                <label>Product Name:</label> 
                <input className='input'
                    value= {name}
                    onChange= { (e) => this.updateName(e.target.value)}
                />
                <label>Price:</label>
                <input className='input'
                    defaultValue= {price}                    
                    onChange= { (e) => this.updatePrice(e.target.value)}
                />
            </div>

             <div className='Form-buttons'>
                <button className='form-buttons' onClick={this.cancelAndClear}>Cancel</button>
                <button className='form-buttons' onClick={this.addToInventory}>Add to Inventory</button>
            </div> 
            
        </div>
           
        )
    }
};

export default Form;