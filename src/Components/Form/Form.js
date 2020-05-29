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
    }

    //handle changes (one for each input)
    updateImage(img){
        this.setState({imgurl: img})
    }

    updateName(name){
        this.setState({name: name})
    }

    updatePrice(price){
        this.setState({price: price})
    }

    //post new product to database 
    addToInventory(name, price, img){
        axios.post('/api/product', {name, price, img})
        .then(res => {

        })

        //use props getInventoryFn
    }

    //clear input boxes
    cancelAndClear(){
        this.setState(
            {name: '', price: 0, imgurl: ''}
        )
    }

    render() {
        return (
        <div className='Form-box'>

            <img 
                className='Form-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp4gNi8GXkEdS-wNV9qN1ZJ-i3N_gKtjzz__oFcm6SBKsZNAA-&usqp=CAU'/>

            <div className='Form-input'>
                Image URL:
                <input className='input'
                    value= {this.state.imgurl}
                    onChange={ (e) => this.updateImage(e.target.value)}    
                />
                Product Name: 
                <input className='input'
                    value= {this.state.name}
                    onChange= { (e) => this.updateName(e.target.value)}
                />
                Price: 
                <input className='input'
                    value= {this.state.price}                    
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