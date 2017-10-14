import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

import $ from 'jquery';
import { Route } from 'react-router-dom';

import Console from './Console';
import Test from './Test';
import Buyer from './Buyer/Buyer';
import Seller from './Seller/Seller';

class App extends Component {
  componentWillMount() {
    $(window).focus(function() {
        console.log("reloading...");
        window.location.reload();
    });
  }
  renderContent() {
    if(window.web3.eth.coinbase === "0x5409ed021d9299bf6814279a6a1411a7e866a631") {
      return(<Route path="/" component={ Buyer } />)
    } else if (window.web3.eth.coinbase === "0x6ecbe1db9ef729cbe972c83fb886247691fb6beb") {
      return(<Route path="/" component={ Seller } />)
    } else {
      return(<Route path="/" component={ Console } />)
    }
  }
  render() {
    return (
      <div className="App">
        { this.renderContent() }
      </div>
    );
  }
}

export default App;
