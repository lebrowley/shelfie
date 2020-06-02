import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    //when trying to delete, there is an error that originates at productList.map below; says: TypeError:productList.map is not a function... how to make the update pass down through here so that it can render properly? is the data after delete somehow not an array any more? is it an object?
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