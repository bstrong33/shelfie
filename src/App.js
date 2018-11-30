import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory:[],
    }

    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory(){
    axios.get('/api/inventory').then(res => {
      // console.log(res.data)
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventoryList={this.state.inventory}
        getFn={this.getInventory}/>
        <Form getFn={this.getInventory}/>
        <Header />
      </div>
    );
  }
}

export default App;
