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
    updateImage(imgurl){
        this.setState({imgurl: imgurl})
    }

    updateName(name){
        this.setState({name: name})
    }

    updatePrice(price){
        this.setState({price: price})
    }

    //post new product to database 
    //use this.props.getInventoryFn (from App.js) in this function??
    //how to get the inputs to be the body values sent on this post request?? 
    addToInventory(name, price, img){
        axios.post('/api/product', {name, price, img})
        .then(res => {
            
        })
        .catch(res => {
            console.log('error adding to inventory')
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

        //getting the user's url to preview?? 
        return (
        <div className='Form-box'>

            <img 
                className='Form-image'
                src={imgurl ?
                    {imgurl}
                    :
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp4gNi8GXkEdS-wNV9qN1ZJ-i3N_gKtjzz__oFcm6SBKsZNAA-&usqp=CAU'}
                alt='form-preview'/>

            <div className='Form-input'>
                Image URL:
                <input className='input'
                    value= {imgurl}
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