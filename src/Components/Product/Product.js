import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {productName, productPrice, productImage} = this.props
        return (
            <div>
                <image 
                    src={productImage}
                    className='product-image'
                />
                <span className='product-name-price'>{productName} {productPrice}</span>

            </div>
        )
    }
};

export default Product;