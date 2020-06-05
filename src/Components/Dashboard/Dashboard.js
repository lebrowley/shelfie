import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            inventory: []
        }
        
        this.getInventory = this.getInventory.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    //get inventory from database
    componentDidMount() {
        this.getInventory()
    }

    getInventory() {  //returns with the array of objects
        axios.get('/api/inventory')
            .then(res => {
                this.setState({ inventory: res.data })
            })
            .catch(res => console.log('error getting products for inventory'))
    }

    //delete product from inventory and get updated inventory
    deleteProduct = (id) => {
        console.log(`deleting ${id}`)
        axios.delete(`/api/product/${id}`)
            .then(res => {
                this.getInventory()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='Dashboard-box'>
                {this.state.inventory.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        deleteProduct={this.deleteProduct}
                    />
                ))}

            </div>
        )

    }
}

export default Dashboard;

