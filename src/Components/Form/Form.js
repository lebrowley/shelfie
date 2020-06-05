import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: '',
            imgurl: '',
            editProductId: null
        }
        
        // this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.reset = this.reset.bind(this)
        this.addToInventory = this.addToInventory.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    handleInput(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    //clear input boxes
    //somewhere something is still off- price doesn't not reset to 0 with the cancel button
    reset(){
        this.setState({name: '', price: '', imgurl: '', editProductId: null})
    }

    //post new product to database 
    addToInventory(){
        const {name, price, imgurl} = this.state
        const body = {name: name, price: price, img: imgurl}
        
        axios.post('/api/product', body)
        .then(res => {
            this.reset()
            console.log('success adding to inventory')
            alert('Success!')
        })
        .catch(res => {
            console.log('error adding to inventory')
        })
    }

    //edit a product
    updateProduct(){
        const {name, price, imgurl, editProductId} = this.state
        const body = {name: name, price: price, img: imgurl}

        axios.put(`/api/product/${editProductId}`, body)
        .then(res => {
            this.reset()
            console.log('success editing a product')
        })
        .catch(res => {
            console.log('error editing product')
        })
    }

    //get one product to edit
    getProduct() {
        axios.get(`api/product/${this.props.match.params.id}`)
        .then(res => {
            this.setState({name: res.data.name, price: res.data.price, imgurl: res.data.img})
        })
    }

  //compares the previous values of Props to the current values of Props. if the ids of the selectedProduct do not match, set state to current props values
    // componentDidUpdate(prevProps, prevState) {
    //     // console.log(prevProps, prevState)
    //     console.log(`old product id is ${prevProps.selectedProduct.id} and new product id is ${this.props.selectedProduct.id}`)
    //     if(prevProps.selectedProduct.id !== this.props.selectedProduct.id) {
    //         console.log('new product selected')
    //         this.setState({
    //             name: this.props.selectedProduct.name,
    //             price: this.props.selectedProduct.price,
    //             imgurl: this.props.selectedProduct.img,
    //             editProductId: this.props.selectedProduct.id
    //         })
    //     }
    // }

    render() {
        const {name, price, imgurl} = this.state

        //how to get the user's img url to preview
        return (
        <div className='Form-box'>

            <img 
                className='Form-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp4gNi8GXkEdS-wNV9qN1ZJ-i3N_gKtjzz__oFcm6SBKsZNAA-&usqp=CAU'
                alt='form-preview'/>

            <div className='Form-input'>
                <label>Image URL:</label>
                <input className='input'
                    name='imgurl'
                    value= {imgurl}
                    onChange={this.handleInput}    
                />
                <label>Product Name:</label> 
                <input className='input'
                    name='name'
                    value= {name}
                    onChange= {this.handleInput}
                />
                <label>Price:</label>
                <input className='input'
                    placeholder='0'
                    name='price'
                    defaultValue= {price}                    
                    onChange= {this.handleInput}
                />
            </div>

             <div className='Form-buttons'>
                <button className='form-buttons' onClick={this.reset}><Link to='/'>Cancel</Link></button>

                {this.state.editProductId ? (
                    <button className='form-buttons' onClick={this.updateProduct}><Link to='/'>Save Changes</Link></button>
                ) : (
                    <button className='form-buttons' onClick={this.addToInventory}>Add to Inventory</button>
                )}
            </div> 
            
        </div>
           
        )
    }
};

export default Form;