import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        const {productList, deleteProductFn} = this.props //from App.js
        return (
            <div className='Dashboard-box'>
                {productList.map(product => (
                    <Product
                        key={product.id}
                        productId={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productImage={product.img}
                        deleteProductFn={deleteProductFn}
                    />
                ))}

            </div>
        )
    }
};

export default Dashboard;