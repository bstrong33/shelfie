import React, { Component } from 'react';
import Product from './../Product/Product'
import axios from'axios';

class Dashboard extends Component {
    constructor(){
        super()

        this.deleteProduct = this.deleteProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    deleteProduct(id){
        axios.delete(`/api/inventory/${id}`)
        this.props.getFn()
    }

    updateProduct(id, name, price, img_url){
        axios.put(`/api/inventory/${id}`, {name, price, img_url})
        this.props.getFn()
    }

  

    render(){
        let { inventoryList } = this.props;
        let mappedInventory = inventoryList.map(item => {
            return (
                <Product key={item.product_id}
                         product={item.name}
                         image={item.img_url}
                         price={item.price}
                         id={item.product_id}
                         deleteFn={this.deleteProduct}
                        />
            )
        })
        return(
            <div>
                Dashboard
                {mappedInventory}
                
            </div>
        )
    }
}

export default Dashboard;