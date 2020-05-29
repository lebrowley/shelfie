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

        this.updateImage = this.updateImage.bind(this)
        this.updateName = this.updateName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.addToInventory = this.addToInventory.bind(this)
        this.cancelAndClear = this.cancelAndClear.bind(this)
        //or write all these methods as arrow functions
    }

    //handle changes (one for each input)
    updateImage(url){
        this.setState({imgurl: url})
    }

    updateName(name){
        this.setState({name: name})
    }

    updatePrice(price){
        this.setState({price: price})
    }

    //post new product to database 
    addToInventory(name, price, url){
        axios.post('/api/product', {name, price, url})

        //use props getInventoryFn
    }

    //clear input boxes
    cancelAndClear(){
        //reset the input boxes to their original state values
    }

    render() {
        return (
        <div className='Form-box'>Form
            <div className='Form-input'> 
                <input
                    value= {this.state.imgurl}
                    onChange={ (e) => this.updateImage(e.target.value)}    
                />
                <input
                    value= {this.state.name}
                    onChange= { (e) => this.updateName(e.target.value)}
                />
                <input
                    value= {this.state.price}
                    onChange= { (e) => this.updatePrice(e.target.value)}
                />
                <div className='Form-buttons'>
                    <button onClick={this.cancelAndClear}>Cancel</button>
                    <button onClick={this.addToInventory}>Add to Inventory</button>
                </div> 
            </div>

        </div>
           
        )
    }
};

export default Form;