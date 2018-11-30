import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
    
        this.state = {
          imageInput: '',
          productInput: '',
          priceInput: 0,
        }

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCancelInput = this.handleCancelInput.bind(this);
        this.addProduct = this.addProduct.bind(this);
      }
    
      handleImageChange(event){
        this.setState({
          imageInput: event
        })
      }
    
      handleProductChange(event){
        this.setState({
          productInput: event
        })
      }
    
      handlePriceChange(event){
        this.setState({
          priceInput: event
        })
      }
    
      handleCancelInput(){
        this.setState({
          imageInput: '',
          productInput: '',
          priceInput: 0
        })
      }

    addProduct(name, price, img_url){
        axios.post('/api/inventory', {name, price, img_url})
        this.props.getFn()
        this.handleCancelInput()
    }

    render(){
        return(
            <div>
                Form
                Img:
                <input onChange={event => {this.handleImageChange(event.target.value)}}></input>
                Product:
                <input onChange={event => {this.handleProductChange(event.target.value)}}></input>
                Price:
                <input onChange={event => {this.handlePriceChange(event.target.value)}}></input>
                <button onClick={() => {this.handleCancelInput()}}>Cancel</button>
                <button onClick={() => {this.addProduct(this.state.productInput, this.state.priceInput, this.state.imageInput)}}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;