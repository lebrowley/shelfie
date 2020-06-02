import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { productId, productName, productPrice, productImage, deleteProductFn} = this.props //from Dashboard.js which is receiving them from App.js
        return (
            <div className='Product-boxes'>
                <div className='product-info'>
                    <img
                        src={productImage}
                        className='product-image'
                        alt='dashboard-display'
                    />
                    <span className='product-name-price'>
                        <label className='product-label name'>{productName}</label>
                        <label className='product-label p'>${productPrice}</label>
                    </span>
                </div>

                <div className='dash-buttons-box'>
                    <button
                        className='dash-buttons'
                        onClick={() => deleteProductFn(productId)}
                    >Delete</button>

                    <button
                        className='dash-buttons'
                        
                        >
                        Edit</button>
                </div>
            </div>
        )
    }
};

export default Product;