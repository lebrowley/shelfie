import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {productName, productPrice, productImage} = this.props
        return (
            <div className='Product-boxes'>
                <img 
                    src={productImage}
                    className='product-image'
                    alt='dashboard-display'
                />
                <span className='product-name-price'>
                    {productName} ${productPrice}
                </span>

                <div className='dash-buttons-box'>
                    <button 
                        className='dash-buttons'>
                        
                    Delete</button>
                    <button 
                        className='dash-buttons'>
                        
                    Cancel</button>
                </div>
            </div>
        )
    }
};

export default Product;