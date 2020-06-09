import React from 'react';

function Product(props) {
    const { product: {id, name, img, price}, deleteProduct, updateSelectedProduct } = props //from Dashboard.js 
    return (
        <div className='Product-boxes'>
            <div className='product-info'>
                <img
                    src={img}
                    className='product-image'
                    alt='dashboard-display'
                />
                <span className='product-name-price'>
                    <label className='product-label name'>{name}</label>
                    <label className='product-label p'>${price}</label>
                </span>
            </div>

            <div className='dash-buttons-box'>
                <button className='dash-buttons' onClick={() => deleteProduct(id)}>Delete</button>
                <button className='dash-buttons' onClick={() => updateSelectedProduct({id, name, img, price})}>Edit</button>
            </div>
        </div>
    )
}


export default Product;