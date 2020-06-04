import React from 'react';
import axios from 'axios';
import Product from '../Product/Product';

function Dashboard(props) {  //props from App.js
    const deleteProduct = (id) => {
        console.log(`deleting ${id}`)
        axios.delete(`/api/product/${id}`)
            .then(res => {
                props.getInventory()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='Dashboard-box'>
            {props.productList.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    deleteProduct={deleteProduct}
                    updateSelectedProduct={props.updateSelectedProduct}
                />
            ))}

        </div>
    )
}


export default Dashboard;

