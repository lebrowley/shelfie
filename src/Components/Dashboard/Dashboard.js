import React, { Component } from 'react';
import Product from '../Product/Product';

//the render isn't working--- 
class Dashboard extends Component {
    render() {
        const {productList} = this.props //from App.js
        return (
            <div className='Dashboard-box'>
                {productList.map(product => (
                    <Product
                        key={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productImage={product.img}
                    />
                ))}

            </div>
        )
    }
};

export default Dashboard;